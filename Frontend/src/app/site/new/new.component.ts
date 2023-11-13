import { Component } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {


  data:any=[]
  constructor(
    
  ){
    this.data=[
      {id:1,name:"Jana",email:"test@gmail.com"},
      {id:2,name:"Balaji",email:"info@gmail.com"},
      {id:3,name:"Sanjay",email:"vimal@gmail.com"},
      {id:4,name:"Bala",email:"bala@gmai.com"},
    ]
    

  }
  view(id){ 
    
    
    console.log(id)


  }

}
