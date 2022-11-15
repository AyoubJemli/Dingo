import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChefService } from '../services/chef.service';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {
  user : any = {};
  addChefForm : FormGroup;
  id:any;
  title:any;
  users : any;
  constructor(private formBuilder : FormBuilder, private activatedRoute : ActivatedRoute,private router : Router, private chefService:ChefService) { }

ngOnInit() {
  this.users = JSON.parse(localStorage.getItem("users")||"[]")
  this.id = this.activatedRoute.snapshot.paramMap.get('id')
  if(this.id){
    this.title = "Edit Chef"
    for(let i=0; i<this.users.length;i++){
      if(this.users[i].id == this.id){
          this.user = this.users[i];
      }
    }
  }else{
    this.title = "Add Chef"
    
  }
    this.addChefForm = this.formBuilder.group({
      firstName : [''],
      lastName : [''],
      email : [''],
      password : [''],
      speciality : [''],
      experience : [''],
      datOfBirth : [''],
    })
  }
  addOrEdit(){
    // if(this.id){
    //   for(let i=0;i<this.users.length;i++){
    //     if(this.users[i].id == this.id){
    //       this.users[i] = this.user;
    //     }
    //   }
    //   localStorage.setItem("users",JSON.stringify(this.users))
    // }else{
    //   let idUser = JSON.parse(localStorage.getItem('idUser')|| "1")
    //   this.user.id = idUser;
    //   this.user.role = "chef";
    //   this.users.push(this.user)
    //   localStorage.setItem("users",JSON.stringify(this.users))
    //   localStorage.setItem("idUser",idUser + 1);
    // }
    // this.router.navigate(['dashboardAdmin'])
    this.chefService.addChef(this.user).subscribe((res:any)=>{
      console.log(res.ok);
    })
  }

}
