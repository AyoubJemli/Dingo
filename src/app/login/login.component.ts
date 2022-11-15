import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { connected } from 'process';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user : any =  {} ;
 loginForm : FormGroup;
 notExist : Boolean = false;
  constructor(private formBuilder :  FormBuilder, private router : Router ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email : [''] ,
      password : [''] ,
    })
    
  }
  login(){
    console.log(this.user);

    let users =JSON.parse(localStorage.getItem("users") || "[]")
    let findedUser:any;
    for (let i = 0; i < users.length; i++) {
      if (users[i].email == this.user.email && users[i].password == this.user.password ) {
        findedUser = users[i]
      }
     
    }
   // redirection 
   if (findedUser) {
    localStorage.setItem("connectedUser", JSON.stringify(findedUser))
    switch (findedUser.role) {
      case 'admin':
        this.router.navigate(['dashboardAdmin'])
        break;
        case 'client':
          this.router.navigate([''])
          break;
          case 'chef':
            this.router.navigate(['dashboardChef'])
        
            break;
    
      default:
        break;
    }
    
   }
  if (findedUser) {
    //user Exist
  } else {
    //user not Exist
    this.notExist = true;
  }
    
  }

}
