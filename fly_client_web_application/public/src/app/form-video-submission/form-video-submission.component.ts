import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-form-video-submission',
  templateUrl: './form-video-submission.component.html',
  styleUrls: ['./form-video-submission.component.css']
})
export class FormVideoSubmissionComponent implements OnInit {
  reader = new FileReader();
  selectedFile: File
  dataImage: any;
  readerResult: string;

  constructor(
    private videoService: VideoService,
  ) { }

  ngOnInit() {
  }

  submitVideo() {
    // asynchronous
    // this.getBase64(this.selectedFile)
    console.log('submitVideo function call')
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile)
  }
}
