import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { ViewallcourseComponent } from './viewallcourse/viewallcourse.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';


const myroutes=[
  {path:"",component:AddcourseComponent},
  {path:"Viewallcourse",component:ViewallcourseComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddcourseComponent,
    ViewallcourseComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
