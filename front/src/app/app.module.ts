import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {  HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MydbService } from './mydb.service';
import { RouterLink,RouterModule,Routes} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShowComponent } from './show/show.component';
import { AddComponent } from './add/add.component';
import { LoginpageComponent } from './loginpage/loginpage.component';


const route:Routes=[
  {path:'',component:WelcomeComponent},
  {path:'show',component:ShowComponent},
  {path:'add',component:AddComponent},
  {path:'login',component:LoginpageComponent},
 

]

@NgModule({
  declarations: [
    AppComponent,WelcomeComponent, ShowComponent, AddComponent, LoginpageComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(route),FormsModule,HttpModule
  ],
  providers: [MydbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
