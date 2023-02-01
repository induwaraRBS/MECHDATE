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
  id: string = "";
  constructor(private http:HttpClient, private route: ActivatedRoute){ }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
  
  }
  register()
  {
    
    let bodyData = {
      "full_name" : this.full_name,
      "Category":this.Category,
      "Address":this.Address,
      "phonenumber":this.phonenumber,
      "email":this.email,
      "Date":this.Date
    } ;
    this.http.patch(`http://localhost:8000/user/newappointment/${this.id}`,bodyData).subscribe((resultData:any)=>
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
