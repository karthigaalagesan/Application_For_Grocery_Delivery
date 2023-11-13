import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,MaxLengthValidator,Validators } from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  loginForm !: FormGroup
  isSubmitted : boolean = false
  constructor(private formBuiler :  FormBuilder){

  }

  ngOnInit(): void {
    this.createForm() 
  }
  // passwordPattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$"
  // pincode="^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$"
  email="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
  createForm(){
    this.loginForm = this.formBuiler.group({
    email:["",[Validators.required,Validators.pattern(this.email)]],
    password:["",[Validators.required,]],
    confirmpassword:["",Validators.required],
    zip:["",Validators.required,Validators.maxLength(6)]
    })
  }

  get formControls(){ 
    return this.loginForm.controls
  }

  onSubmit(){
    this.isSubmitted = true
    
        console.log("Form Valid  : ",this.loginForm)

  }


}
