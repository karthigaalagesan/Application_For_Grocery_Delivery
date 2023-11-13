import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-card',
  templateUrl: './multi-card.component.html',
  styleUrls: ['./multi-card.component.css']
})
export class MultiCardComponent {


  selectedItem:any;
  check:boolean=false;

  cards:any=[

    {name:'Jana',email:'jana@gmail.com',class:'Msc',age:'24',language:'Tamil'},
    {name:'Yuva',email:'yuva@gmail.com',class:'bsc',age:'18',language:'Hindi'},
    {name:'Bala',email:'bala@gmail.com',class:'Msc',age:'24',language:'Tamil'},
    {name:'Sanjay',email:'sanjay@gmail.com',class:'BA',age:'22',language:'Tamil'},
    {name:'Vijay',email:'vijay@gmail.com',class:'BCA',age:'19',language:'Tamil'},
    {name:'Manju',email:'manju@gmail.com',class:'Bcom',age:'20',language:'Tamil'},
    {name:'Geetha',email:'geetha@gmail.com',class:'Mcom',age:'23',language:'Tamil'},
    {name:'Tamil',email:'test@gmail.com',class:'Msc',age:'21',language:'Tamil'},
    {name:'Mani',email:'mani@gmail.com',class:'Msc',age:'22',language:'Tamil'},
    {name:'Ragavan',email:'ragavan@gmail.com',class:'Msc',age:'22',language:'Tamil'},
    {name:'Jana',email:'jana@gmail.com',class:'Msc',age:'24',language:'Tamil'},
    {name:'Yuva',email:'yuva@gmail.com',class:'bsc',age:'18',language:'Hindi'},
    {name:'Bala',email:'bala@gmail.com',class:'Msc',age:'24',language:'Tamil'},
    {name:'Sanjay',email:'sanjay@gmail.com',class:'BA',age:'22',language:'Tamil'},
    {name:'Vijay',email:'vijay@gmail.com',class:'BCA',age:'19',language:'Tamil'},
    {name:'Manju',email:'manju@gmail.com',class:'Bcom',age:'20',language:'Tamil'},
    {name:'Geetha',email:'geetha@gmail.com',class:'Mcom',age:'23',language:'Tamil'},
    {name:'Tamil',email:'test@gmail.com',class:'Msc',age:'21',language:'Tamil'},
    {name:'Mani',email:'mani@gmail.com',class:'Msc',age:'22',language:'Tamil'},
    {name:'Ragavan',email:'ragavan@gmail.com',class:'Msc',age:'22',language:'Tamil'},
    {name:'Jana',email:'jana@gmail.com',class:'Msc',age:'24',language:'Tamil'},
    {name:'Yuva',email:'yuva@gmail.com',class:'bsc',age:'18',language:'Hindi'},
    {name:'Bala',email:'bala@gmail.com',class:'Msc',age:'24',language:'Tamil'},
    {name:'Sanjay',email:'sanjay@gmail.com',class:'BA',age:'22',language:'Tamil'},
    {name:'Vijay',email:'vijay@gmail.com',class:'BCA',age:'19',language:'Tamil'},
    {name:'Manju',email:'manju@gmail.com',class:'Bcom',age:'20',language:'Tamil'},
    {name:'Geetha',email:'geetha@gmail.com',class:'Mcom',age:'23',language:'Tamil'},
    {name:'Tamil',email:'test@gmail.com',class:'Msc',age:'21',language:'Tamil'},
    {name:'Mani',email:'mani@gmail.com',class:'Msc',age:'22',language:'Tamil'},
    {name:'Ragavan',email:'ragavan@gmail.com',class:'Msc',age:'22',language:'Tamil'},
    {name:'Jana',email:'jana@gmail.com',class:'Msc',age:'24',language:'Tamil'},
    {name:'Yuva',email:'yuva@gmail.com',class:'bsc',age:'18',language:'Hindi'},
    {name:'Bala',email:'bala@gmail.com',class:'Msc',age:'24',language:'Tamil'},
    {name:'Sanjay',email:'sanjay@gmail.com',class:'BA',age:'22',language:'Tamil'},
    {name:'Vijay',email:'vijay@gmail.com',class:'BCA',age:'19',language:'Tamil'},
    {name:'Manju',email:'manju@gmail.com',class:'Bcom',age:'20',language:'Tamil'},
    {name:'Geetha',email:'geetha@gmail.com',class:'Mcom',age:'23',language:'Tamil'},
    {name:'Tamil',email:'test@gmail.com',class:'Msc',age:'21',language:'Tamil'},
    {name:'Mani',email:'mani@gmail.com',class:'Msc',age:'22',language:'Tamil'},
    {name:'Ragavan',email:'ragavan@gmail.com',class:'Msc',age:'22',language:'Tamil'},
    
  ]

  CardSelection() {

    console.log("button")

    this.check=!this.check;
   
  }


}
