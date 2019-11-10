import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  images: []
  videos: []

  constructor(
    private imageService: ImageService,
    private videoService: VideoService
    ) { }

  ngOnInit() {
    this.getImages()
    this.getVideos()
  }
  getImages(){
    this.imageService.getImages().subscribe(data=>{
      this.images = data['imageList'];
      console.log('in here', this.images)
    })
  }

  getVideos(){
    this.videoService.getVideos().subscribe(data=>{
      this.videos = data['imageList'];
      console.log('in here to get videos', this.videos)
    })
  }

  testing(){
    this.imageService.callImageServer().subscribe(data=>{
      console.log('got our data', data)
    })
  }
}
