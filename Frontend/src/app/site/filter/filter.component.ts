import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  currentPage: number = 1;
itemsPerPage: number = 10;
  nameFilter='';
  emailFilter='';
  classFilter='';
  ageFilter=0;
  languageFilter=''; 


  tableData:any=[
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
 filterData:any;
  
  ngOnInit(){
    let pos=1
    this.tableData.forEach((element:any)=>{
        element={
          ...element,
          sno:pos
        }
        pos=pos+1
    })
    this.filterData = this.tableData;
    console.log(this.tableData)
  }
  table_filter(){

    this.filterData=this.tableData.filter((item:any)=>{
      let output_age= this.ageFilter>0?item.age==this.ageFilter:true
      let output_name=this.nameFilter.length>0?item.name.toLowerCase().includes(this.nameFilter):true
      let output_email=this.emailFilter.length>0?item.email.toLowerCase().includes(this.emailFilter):true
      let output_clas=this.classFilter.length>0?item.class.toLowerCase().includes(this.classFilter):true
      let output_langu=this.languageFilter.length>0?item.language.toLowerCase().includes(this.languageFilter):true


     
      // return output_age
      return output_name && output_age && output_email && output_clas && output_langu
  })
}

get displayedItems(): any[] {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.filterData.slice(startIndex, endIndex);
}

nextPage() {
  if (this.currentPage < this.totalPages()) {
    this.currentPage++;
  }
}

previousPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
  }
}

totalPages(): number {
  return Math.ceil(this.filterData.length / this.itemsPerPage);
}

}
