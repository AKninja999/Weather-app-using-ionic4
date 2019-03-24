import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
const API_URL1 = environment.apiUrl1;
const API_URL2 = environment.apiUrl2;
const API_KEY = environment.apiKey; 
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }

  getdata(url){
    if(url===undefined||null)
    {
      url="Mumbai";
    }
    return this.http.get(`${API_URL1}${url}&APPID=${API_KEY}`);
  }
  getfordata(cit1,country){
    if(cit1===undefined||null)
    {
      cit1="Mumbai";
    }
    if(country===undefined||null)
    {
      country="IN";
    }
    return this.http.get(`${API_URL2}${cit1},${country}&APPID=${API_KEY}`);
  }
}
