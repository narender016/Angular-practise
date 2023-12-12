import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  Fetchdata(){
   return this.http.get('https://api.sampleapis.com/recipes/recipes');
  }
}
