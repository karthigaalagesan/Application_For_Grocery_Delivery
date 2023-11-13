import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.css']
})
export class TableFilterComponent {

  @ViewChild('nameVar')nameVar1 : any='';
  @ViewChild('emailVar')emailVar1 : any='';
  @ViewChild('classVar')classVar1 : any='';
  @ViewChild('ageVar')ageVar1 : any='';
  @ViewChild('languageVar')languageVar1 : any='';


  studentListArray:any=[
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

  tempStudentListArray=[...this.studentListArray];

  searchFilter(){
    this.tempStudentListArray=[];
    let filterObject:any={
      name:this.nameVar1.nativeElement.value,
      class:this.classVar1.nativeElement.value,
      email:this.emailVar1.nativeElement.value,
      age:this.ageVar1.nativeElement.value,
      language:this.languageVar1.nativeElement.value,
      
      
    }
    
for(let i=0;i < this.studentListArray.length;i++){
  let isStringMatch
  for(let key in filterObject){
    if(key=='age'){
      isStringMatch=this.studentListArray[i][key].toString().indexOf(filterObject[key])>-1;
    }
    else{
      isStringMatch=this.studentListArray[i].toUpperCase().indexOf(filterObject[key]).toUpperCase()> -1;
    }
    if(isStringMatch==false){
      break;
    }
  }
  if(isStringMatch){
    
    this.tempStudentListArray.push(this.studentListArray[i]);
  }
}
  }


  filterText=""
  priceFilter=0;
  nameFilter=""
  data = [
    { id: 1, name: 'Item 1', price: 10 },
   
    { id: 2, name: 'Item 2', price: 15 },
     { id: 3, name: 'mytest', price: 15 },
    // Add more data as needed
  ];

  filteredData = this.data;
  

  table_filter(){

    console.log("hi ")
    let price=this.priceFilter
    let name=this.nameFilter
    // function myfilter(item){
    //   let out= item.price==price
    //   console.log(price)
    //   console.log(name)
    //   let out_name=item.name.toLowerCase().includes(name)
    //   console.log('helo',item,"out ",out,'out_name',out_name )
    //   return out && out_name

      
    // }
    this.filteredData=this.data.filter((item)=>{
      let out= item.price==this.priceFilter
     
      let out_name=item.name.toLowerCase().includes(this.nameFilter)
      console.log('helo',item,"out ",out,'out_name',out_name )
      return out && out_name

      
    })
    console.log("filter",this.filteredData)

  //   this.filteredData = this.data.filter(item => item.name.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1);
  }

}


