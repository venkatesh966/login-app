import { Component, OnInit } from '@angular/core';
import { MydbService } from '../mydb.service';
import { Mydb } from '../mydb';
import { Http } from '@angular/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private mydb:MydbService,private http:Http) { }
  
    model:Mydb
  modell:any;
    display(){
      this.mydb.getData().subscribe(array=>{
        this.modell=array;
        console.log(this.modell);
      })
  
    }
  
    ngOnInit() {
      this.display();
    }
  

}
