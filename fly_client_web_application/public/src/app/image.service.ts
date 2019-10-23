import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private _httpClient: HttpClient) {
   }

   getImages() {
     return this._httpClient.get('/proxyToImages')
   }

   sendImage(image){
    return this._httpClient.post('/sendImage',{'k':'v'})
   }
}
