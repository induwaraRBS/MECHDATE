import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignuppageComponent } from '../signuppage/signuppage.component';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import { AccountdetailsComponent } from '../accountdetails/accountdetails/accountdetails.component';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit  {

  constructor(private route:ActivatedRoute){

  }
  
  
  
  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
    });

    }
  } 
  


