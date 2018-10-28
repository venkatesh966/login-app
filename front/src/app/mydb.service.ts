import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map' ;
@Injectable()
export class MydbService {

  constructor(private http:Http) { }

getData(){
  return this.http.get("http://localhost:3000/api/mydb")
  .map(res => res.json());
}
addData(info){
  return this.http.post("http://localhost:3000/api/mydb",info)
  .map(res => res.json());
}

}
