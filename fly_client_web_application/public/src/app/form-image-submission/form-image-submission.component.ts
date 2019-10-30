import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-form-image-submission',
  templateUrl: './form-image-submission.component.html',
  styleUrls: ['./form-image-submission.component.css']
})
export class FormImageSubmissionComponent implements OnInit {
  reader = new FileReader();
  selectedFile: File
  dataImage: any;
  readerResult: string;

  constructor(
    private imageService: ImageService,
  ) {}

  ngOnInit() {
  }

  submitImage() {
    this.getBase64(this.selectedFile)
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile)
  }
  // get base 64 and return as string...
   getBase64(file) {
     var _this = this
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function(e) {
      console.log("L: " + reader.result)
      _this.imageService.sendImage(reader.result)
    }
 }
}