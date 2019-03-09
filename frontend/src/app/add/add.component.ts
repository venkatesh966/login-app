import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MydbService } from '../mydb.service';
import { Mydb } from '../mydb';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private mydb:MydbService,private http:Http) { }

  model = new Mydb();
  modell:any=[];
  value:boolean=true;

  display(){
    this.mydb.getData().subscribe(array=>{
      this.modell=array;
    })

  }
  validatedata()
  {

    for(var i=0;i<this.modell.length; i++){
      if(this.modell[i].emailid === this.model.emailid)
      {
        this.value=false;
        alert("Already this email is present");
        break;
      }
    }
    if(this.value){
      this.addDat();
    

    }
    
  }
  addDat()
  {
    this.mydb.addData(this.model).subscribe();
    alert("registration happened successfully")
  }
  

  ngOnInit() {
    this.display();
  }

}
