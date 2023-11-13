import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms'

@Component({
  selector: 'app-login-new',
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.css']
})
export class LoginNewComponent implements OnInit {
  loginForm:FormGroup
  isSubmitted:boolean=false
  constructor(private fb :FormBuilder){

  }

  ngOnInit():void{

  }
  creatForm(){
    this.loginForm =this.fb.group({
      email:["",Validators.required,Validators.email],
      passWord:["",Validators.required],
      CpassWord:["",Validators.required],
      zipCode:["",Validators.required]

    })
  }

  get formControls(){
    return this.loginForm.controls
  }

  onSubmit(){
    this.isSubmitted=true
    console.log("Form Valid  : ",this.loginForm.value)
  }

}
