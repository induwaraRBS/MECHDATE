import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  mechArray :any[] =[];
  first_name :string ="";
  Last_name :string ="";
  email:string="";
  expertise:string="";
  phone:string="";
 

  constructor(private http:HttpClient){
    this.getAllmechanics();
}
  getAllmechanics() {
    this.http.get("http://localhost:8000/user/getAll").subscribe((resultData: any)=>
    {
      
        // console.log(resultData);
        this.mechArray = resultData.data;
  });
}
  
  ngOnInit(): void {  
    
  }


}
