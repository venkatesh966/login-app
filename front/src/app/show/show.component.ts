import { Component, OnInit } from '@angular/core';
import { MydbService } from '../mydb.service';
import { Http } from '@angular/http';
import { Mydb } from '../mydb';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private mydb:MydbService,private http:Http,private _router: Router) { }

   value:boolean=true;
  model:any=[];
modell:any=[];
  display(){
    this.mydb.getData().subscribe(array=>{
      this.model=array;
    })

  }
  validatedata()
  {

    for(var i=0;i<this.model.length; i++)
    {
      if(this.model[i].emailid === this.modell.emailid)
      {
        if(this.model[i].password === this.modell.password)
        {
        this.value=false;
        alert("login happened successfully");
        sessionStorage.setItem("user", this.modell.emailid);
        
        
        this._router.navigate(['/login']);
        break;
        }
      }
    }
   if(this.value)
   {
     alert("you are not registered member");
   }
}
  ngOnInit() {
    this.display();
  }

}
  /*validatedata()
  {
    console.log(this.modell);
    for(var i=0;i<this.model.length; i++){
      if(this.model[i].emailid === this.modell.emailid)
      {
        this.value=false;
        console.log("Already this email is present");
        alert("Already this email is present");
        break;
      }
    }
    if(this.value){
     alert("login happened successfully")
    }
    
  }*/

 
