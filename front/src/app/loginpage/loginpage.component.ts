import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private _router: Router) { }

myfunc(){
   if(sessionStorage.length==0)
   {
this.logout();
   }
  }
  logout() {
   sessionStorage.removeItem("user");
    this._router.navigate(['/show']);
  }
  ngOnInit() {
    this.myfunc();
  }

}
