import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../confirmPwd';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName : ['',[Validators.required,Validators.minLength(3)]],
      lastName : ['',[Validators.required,Validators.minLength(5)]],
      email : ['',[Validators.required,Validators.email]],
      password : ['',[Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)]],
      confirmPassword : [''],
      tel : ['',[Validators.required , Validators.pattern("^((\\+91-?)|0)?[0-9]{8}$")]]
    },{
      // appel de notre validateur MustMatch
      validator : MustMatch('password','confirmPassword')
      });
    }
    signup(f:any){
      f.role = "client";
      let idUser = JSON.parse(localStorage.getItem("idUser")||"1")
      f.id = idUser;
      let users = JSON.parse(localStorage.getItem("users"||"[]"))
      users.push(f)
      localStorage.setItem("users",JSON.stringify(users))
      localStorage.setItem("idUser",idUser + 1)
    } 
  }

