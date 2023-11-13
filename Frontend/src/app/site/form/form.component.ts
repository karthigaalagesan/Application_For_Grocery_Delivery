import { Component, ViewChild } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  myForm: FormGroup;
  tableData:any=[]

  nameFilter='';
  emailFilter='';

  filterData:any=[]
  @ViewChild('createform') createform: any;

  constructor(
    private fb :  FormBuilder,
    private modalService: NgbModal,
    ){}
 

  ngOnInit(){ 
    this.createForm()

  }

  openForm(){
    this.modalService.open(this.createform);
    
  }


  createForm(){
    this.myForm = this.fb.group({
    name:["",[Validators.required,]],
    email:["",[Validators.required,]],
    
   
    })
  }

  onSubmit(){

    if (this.myForm.valid) {
      
      const formData = this.myForm.value;
      console.log(formData);
      this.tableData.push(formData)
      this.filterData=this.tableData
      this.myForm.reset();
    
     
    }

  }

  btnClose(){
    this.modalService.dismissAll();
  }

  table_filter(){

    this.tableData=this.filterData.filter((item:any)=>{
      let output_name=this.nameFilter.length>0?item.name.toLowerCase().includes(this.nameFilter):true
      let output_email=item.email.toLowerCase().includes(this.emailFilter)
    
     
      // return output_age
      return output_name && output_email 
  })
}

}
