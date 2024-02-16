import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  private apiurl='https://api.openweathermap.org/data/2.5/';
  private apikey='712a23870ce23bf9a9e4aea6237cb540';

  getweather(city:string):Observable<Weather>{
    const options=new HttpParams()
    .set('units','metric')
    .set('q',city)
    .set('appId',this.apikey);
    return this.http.get<Weather>(this.apiurl+'weather',{ params:options});

  }
}
