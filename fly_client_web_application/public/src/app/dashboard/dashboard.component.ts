import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  images: []


  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.getImages()
  }
  getImages(){
    this.imageService.getImages().subscribe(data=>{
      this.images = data['imageList'];
    })
  }
}
