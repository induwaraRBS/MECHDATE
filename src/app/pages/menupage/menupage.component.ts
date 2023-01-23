import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {
  full_name :string ="";
  Category :string ="";
  Address:string="";
  phonenumber:string="";
  email :string ="";
  Date:string="";
  constructor(private http:HttpClient){ }
  
  ngOnInit(): void {
    
  
  }
  register()
  {
    
    let bodyData = {
      "full_name" : this.full_name,
      "Category":this.Category,
      "Address":this.Address,
      "phone":this.phonenumber,
      "email":this.email,
      "Date":this.Date
    } ;
    this.http.post("http://localhost:8000/",bodyData).subscribe((resultData:any)=>
    {
      console.log(resultData);
      alert("Mechanic Registered Successfully")
      // this.getAllEmployee();
      this.full_name = '';
      this.Category = '';
      this.Address='';
      this.phonenumber='';
      this.email='';
      this.Date='';
      
    });
  }

}
