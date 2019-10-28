import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ImageService } from '../image.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-image-submission',
  templateUrl: './form-image-submission.component.html',
  styleUrls: ['./form-image-submission.component.css']
})
export class FormImageSubmissionComponent implements OnInit {
  checkoutForm;
  imageForm;
  reader = new FileReader();
  selectedFile: File
  dataImage: any;
  readerResult: string;
  myVal = 5;

  constructor(
    private formBuilder: FormBuilder,
    private imageService: ImageService,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
    this.imageForm = this.formBuilder.group({
      image: '',
    })
  }

  ngOnInit() {
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    this.checkoutForm.reset();
  }
  onSubmit2(imageData) {
    // asynchronous
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