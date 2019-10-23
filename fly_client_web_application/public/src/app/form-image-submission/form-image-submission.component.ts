import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ImageService } from '../image.service';

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
    this.getBase64(this.selectedFile)
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile)
  }

   getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    this.dataImage = reader.onload = function () {
      console.log('reader result:', reader.result)
      return reader.result
    };
    // this.imageService.sendImage('hi')
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
    console.log('dataimage:', this.dataImage)

 }
}