import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private _httpClient: HttpClient) { }

  getVideos() {
    // get videos
  }

  sendImage(image){
    console.log('inside service', image, typeof(image))
    this._httpClient.post('http://localhost:9000/api/upload/video', { 'key': image}).subscribe((data)=>{
     console.log('in here', data)
    })
 }

}
