import { Component } from '@angular/core';

@Component({
  selector: 'app-smart-login',
  templateUrl: './smart-login.component.html',
  styleUrls: ['./smart-login.component.css']
})
export class SmartLoginComponent {

  isActiveClass:any='signin'
  getActiveClass(event:any){
    if(event=='signup'){
      this.isActiveClass='signup'
    }else{
      this.isActiveClass='signin'
    }
  }
}
