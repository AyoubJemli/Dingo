import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  user : any = {};
  addAdminForm : FormGroup;
  id:any;
  title:any;
  users:any;
  constructor(private formBuilder : FormBuilder, private activatedRoute : ActivatedRoute,private router : Router ) { }

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem("users")||"[]")
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    if(this.id){
      this.title = "Edit User"
      for(let i=0; i<this.users.length;i++){
        if(this.users[i].id == this.id){
            this.user = this.users[i];
        }
      }
    }else{
      this.title = "Add Admin"

    }
    this.addAdminForm = this.formBuilder.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      password : [''],
      tel : [''],
    })
  }
  addOrEdit(){
    if(this.id){
      for(let i=0;i<this.users.length;i++){
        if(this.users[i].id == this.id){
          this.users[i] = this.user;
        }
      }
      localStorage.setItem("users",JSON.stringify(this.users))
    }else{
      let idUser = JSON.parse(localStorage.getItem('idUser')|| "1")
      this.user.id = idUser;
      this.user.role = "admin";
      this.users.push(this.user)
      localStorage.setItem("users",JSON.stringify(this.users))
      localStorage.setItem("idUser",idUser + 1);
    }
    this.router.navigate(['dashboardAdmin'])    
  }
}
