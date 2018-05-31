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
      console.log(this.modell);
    })

  }
  validatedata()
  {
    console.log(this.modell);
    for(var i=0;i<this.modell.length; i++){
      if(this.modell[i].emailid === this.model.emailid)
      {
        this.value=false;
        console.log("Already this email is present");
        alert("Already this email is present");
        console.log("I am in for if block loop")
        break;
      }
      console.log("I am in for loop")
    }
    if(this.value){
      console.log("I am in adding if block");
      this.addDat();
    

    }
    
  }
  addDat()
  {
    this.mydb.addData(this.model).subscribe();
    console.log("i am in adddat method");
    alert("registration happened successfully")
  }
  

  ngOnInit() {
    this.display();
  }

}
