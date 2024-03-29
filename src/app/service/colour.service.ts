import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colour } from '../models/colour';
import { ListResponseModel } from '../models/ListResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColourService {
  apiUrl="https://localhost:44395/api/colours/getall"
  constructor(private httpClient:HttpClient) { }
 getColours():Observable<ListResponseModel<Colour>>{
  return this.httpClient.get<ListResponseModel<Colour>>(this.apiUrl)
  }
}
