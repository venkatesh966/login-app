import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WeatherService {
 public url:any
  constructor(public http: Http) { 
    
  }

  WeatherApi(lat, lon) {
    this.url = 'https://samples.openweathermap.org/data/2.5/forecast/daily?lat=' +lat + '&amp;lon=' + lon +' &amp;appid=b1b15e88fa797225412429c1c50c122a1'
    return this.http.get(this.url).map( res => res.json());

  }

}
