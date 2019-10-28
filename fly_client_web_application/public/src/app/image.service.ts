import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private _httpClient: HttpClient) {
   }

   getImages() {
     return this._httpClient.get('http://localhost:9000/api/images')
   }

   sendImage(image){
     console.log('inside service', image, typeof(image))
    //  const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization': 'my-auth-token'
    //   })
    // };
    // this._httpClient.post('http://localhost:9000/api/upload',{'key':image}
    // )
    this._httpClient.post('http://localhost:9000/api/upload', { 'key': image}).subscribe((data)=>{
      console.log('in here', data)
    })
  }

   callImageServer(){
     return this._httpClient.get('http://localhost:9000/callImageServer')
   }

   
}
