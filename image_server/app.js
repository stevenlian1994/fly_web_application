const path = require("path");
const fs = require("fs");
var express = require('express')
var app = express()
app.use(express.json())
// const bodyParser = require("body-parser");

const multer = require("multer");

const upload = multer({
  dest: "/path/to/temporary/directory/to/store/uploaded/files"
});

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'fly',
})

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected to database..')
});

const handleError = (err, res) => {
  res
    .status(500)
    .contentType("text/plain")
    .end("Oops! Something went wrong!");
};


app.use(express.static(__dirname + "/static"));

app.set("views", __dirname + '/views');
app.set("view engine", "ejs");

// endoint to get any image
app.get('/api/image/:imagePath', (req, res) => {
  res.sendFile(path.join(__dirname, "./uploads/"+req.params.imagePath));
})

// endpoint to get all images
app.get('/api/images', function(req, res){
    connection.query(`SELECT * FROM images`, function(err, results){
      let imageList = []
      for(let i = 0; i < results.length; i++){
        imageList.push(results[i])
      }
      res.json({imageList})
    })
})

app.post(
  "/api/upload",
  (req, res) => {
    // handle jpeg or png
    var base64Data = req.body['key'].replace(/^data:image\/jpeg;base64,/, "");
    var folderName = "uploads"
    var baseName = new Date().toString().replace(/[^\w]/g, '');
    console.log(baseName)
    let imageName = baseName+".jpg"
    fs.writeFile("./"+ folderName+ "/"+ imageName, base64Data, 'base64', function(err) {
      console.log(err);
    });
    
    connection.query(`INSERT INTO images (image_folder, image_path) VALUES ('${folderName}', '${imageName}')`, function(err, results){
      console.log(results)
    })
    // if (path.extname(imageName).toLowerCase() === ".png" | path.extname(imageName).toLowerCase() === ".jpg") {
    //   fs.rename(tempPath, targetPath, err => {
    //     if (err) {
    //       return handleError(err, res);
    //     }

    //     res
    //       .status(200)
    //       .contentType("text/plain")
    //       .end("File uploaded!");
    //   });
    // } else {
    //   fs.unlink(tempPath, err => {
    //     if (err) return handleError(err, res);

    //     res
    //       .status(403)
    //       .contentType("text/plain")
    //       .end("Only .png files are allowed!");
    //   });
    // }
  }
);

app.listen(9000, function(){
    console.log("initiating image server on port 9000")
})

