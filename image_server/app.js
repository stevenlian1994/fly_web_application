const http = require("http");
const path = require("path");
const fs = require("fs");
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

var express = require('express')
var app = express()

app.use(express.static(__dirname + "/static"));

app.set("views", __dirname + '/views');
app.set("view engine", "ejs");

// endoint to get any image
app.get('/uploads/:imagePath', (req, res) => {
  res.sendFile(path.join(__dirname, "./uploads/"+req.params.imagePath));
})

// endpoint to get all images
app.get('/', function(req, res){
    connection.query(`SELECT * FROM images`, function(err, results){
      let imageList = []
      for(let i = 0; i < results.length; i++){
        imageList.push(results[i])
      }
      res.json({imageList})
    })
})

app.post(
  "/upload",
  upload.single("file" /* name attribute of <file> element in your form */),
  (req, res) => {
    const tempPath = req.file.path;
    let imageName = req.file.originalname

    const targetPath = path.join(__dirname, "./uploads/"+imageName);

    connection.query(`INSERT INTO images (image_folder, image_path) VALUES ('uploads', '${imageName}')`, function(err, results){
      console.log(results)
    })
    if (path.extname(imageName).toLowerCase() === ".png" | path.extname(imageName).toLowerCase() === ".jpg") {
      fs.rename(tempPath, targetPath, err => {
        if (err) {
          return handleError(err, res);
        }

        res
          .status(200)
          .contentType("text/plain")
          .end("File uploaded!");
      });
    } else {
      fs.unlink(tempPath, err => {
        if (err) return handleError(err, res);

        res
          .status(403)
          .contentType("text/plain")
          .end("Only .png files are allowed!");
      });
    }
  }
);


app.listen(9000, function(){
    console.log("listening on port 9000")
})

