import { Component } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent { 

check:boolean=false;
sidebar:boolean=false;

  onClick(){
    this.check=!this.check;
    this.sidebar=!this.sidebar;
    console.log('button')
  }



}
