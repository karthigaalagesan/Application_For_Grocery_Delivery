import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  @ViewChild('createform') createform: any;

  userForm!:FormGroup;
  divOpen:boolean=true;
  tableData:any=[];
  //
  filterData:any=[];
  startCode:any;
  endCode:any;
  //
  currentPage: number = 1;
itemsPerPage: number = 10;


 modal:boolean=true;
 singleRowData:any;
  //
  idFilter=0;
  titleFilter='';
  priceFilter=0
  decFilter="";
  codeFilter=0;
  revenueFilter=0;
  filteredItems: any=[];

  


  constructor(
    private fb :  FormBuilder,
    private modalService: NgbModal,
    private httpClient:HttpClient
    ){}

    ngOnInit(){ 
      this.createForm();
      this.getTableData()
  
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
    

    createForm(){
      
      this.userForm = this.fb.group({
        id:["",[Validators.required,]],
        title:["",[Validators.required,]],
        price:["",[Validators.required,]],
        description:["",[Validators.required,]],
        
      })
    }
    get formControls(){ 
      return this.userForm.controls
    }


    getTableData(){

      this.httpClient.get('https://fakestoreapi.com/products').subscribe({
        next:(data)=>{
           console.log(data)
          this.tableData=data;
          this.filterData = data;
    
        },
        error:(errors)=>{
          console.log(errors)
    
        } 
      })
    }

    submitData(){
      /*
      this.httpClient.post('https://fakestoreapi.com/products').subscribe({
        next:(data)=>{
          this.tableData=data
        }

      })*/

    }



    onSubmit(){
      if (this.userForm.valid) {
        // console.log("form valid");
        const formData = this.userForm.value;
        // console.log(formData)
        this.tableData.push(formData)
        this.filterData=this.tableData
      this.userForm.reset();
      this.modal=true
    }


}

view(data){
  console.log(data)
  this.singleRowData=data
  this.modalService.open(this.createform);
  
}

clickClose(){
  console.log("Close clicked")
  this.modalService.dismissAll()
}

table_filter(){

  this.filterData=this.tableData.filter((item:any)=>{
    console.log('filter data',item)
    let id_1=this.idFilter>0?item.id==this.idFilter:true
    let title=this.titleFilter.length>0?item.title.toLowerCase().includes(this.titleFilter):true
    let price=this.priceFilter>0?item.price==this.priceFilter:true
    // let revenue_1=this.revenueFilter>0?item.revenue==this.revenueFilter:true
    let dec_1=this.decFilter.length>0?item.description.toLowerCase().includes(this.decFilter):true

    
  
   
   
    // return output_age
    return id_1;
})
}


openForm(){
  this.modal=!this.modal
}

closeForm(){
  this.modal=true
}

RangeFilter() {
  this.tableData = this.filterData.filter((item:any) => {
    console.log(item)
    if(item.code>=this.startCode && item.code<=this.endCode)
    return true

    return

  });
}
}
