import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private _httpClient: HttpClient) { }

  getVideos() {
    // get videos
    console.log('in video service')
    return this._httpClient.get('http://localhost:9000/api/videos')
  }

  sendImage(image){
    console.log('inside service', image, typeof(image))
    this._httpClient.post('http://localhost:9000/api/upload/video', { 'key': image}).subscribe((data)=>{
     console.log('in here', data)
    })
 }

}
