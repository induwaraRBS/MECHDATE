import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit{
  first_name :string ="";
  Last_name :string ="";
  email:string="";
  expertise:string="";
  phone:string="";
  password :string ="";
 

  constructor(private http:HttpClient)
  {

  }
   ngOnInit(): void {
     
   }
  register()
  {
    
    let bodyData = {
      "first_name" : this.first_name,
      "Last_name":this.Last_name,
      "email":this.email,
      "expertise":this.expertise,
      "phone":this.phone,
      "password":this.password,
      Appointments:[]
    } ;
    this.http.post("http://localhost:8000/user/create",bodyData).subscribe((resultData:any)=>
    {
      console.log(resultData);
      alert("Mechanic Registered Successfully")
      // this.getAllEmployee();
      this.first_name = '';
      this.Last_name = '';
      this.email='';
      this.expertise='';
      this.phone='';
      this.password = '';
    });
  }



}
