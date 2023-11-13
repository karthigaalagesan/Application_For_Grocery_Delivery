import { HttpClient } from '@angular/common/http';
import { Component,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() message:string=""

tableData:any=[]

@Output() messageEvent=new EventEmitter<string>();

// sendMessage(){
 
//  this.messageEvent.emit("welcom to my page")
// }
// childMessage:string="Welcom To my page"

constructor(private httpClient:HttpClient){}

priceFilter=0;
titleFilter="";
idFilter=0;
descriptionFilter="";

filterData = this.tableData;






ngOnInit()

{
this.getTableData();
}

getTableData(){

  this.httpClient.get('https://fakestoreapi.com/products').subscribe({
    next:(data)=>{
       console.log(data)
      this.tableData=data 

    },
    error:(errors)=>{
      console.log(errors)

    } 
  })
}


table_filter(){
  console.log("hi msg")

  this.filterData=this.tableData.filter((item:any)=>{
  
    let output_price= this.priceFilter>0?item.price==this.priceFilter:true
    let output_id= this.idFilter>0?item.id==this.idFilter:true
    let output_title=this.titleFilter.length>0?item.title.toLowerCase().includes(this.titleFilter):true
    let output_dec=this.descriptionFilter.length>0?item.description.toLowerCase().includes(this.descriptionFilter):true
   
   
    // return output_age
    return output_id && output_title && output_dec && output_price
})
// && output_title && output_dec && output_price
   
     
     

      
   
}




}
