import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  //Details about mechanics

  mechanicDetails = [
    {
      id:1,
      MechanicName:"Jhon",
      Experties:"Motor Bikes engines",
      Address:"No.57,Hallow street,Brooklyn ",
      Ratings:"7/10",
      mechimg:"" 
       
    },
    {
      id:2,
      MechanicName:"Jhon",
      Experties:"Motor Bikes engines",
      Address:"No.57,Hallow street,Brooklyn ",
      Ratings:"7/10",
      mechimg:""
    },
    {
      id:3,
      MechanicName:"Jhon",
      Experties:"Motor Bikes engines",
      Address:"No.57,Hallow street,Brooklyn ",
      Ratings:"7/10",
      mechimg:"https://unsplash.com/@harrydona?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    }

  ]
  
}
