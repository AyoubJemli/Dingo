import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  users:any;
  plates:any;
  constructor(private router:Router) { }

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem("users"||"[]"))
    this.plates = JSON.parse(localStorage.getItem("plates")||"[]")
  }
  deleteUser(id:any,role:any){
    if(role == 'chef'){
      // suppression des plats du chef à supprimer 
      let newPlates=[];
      for (let i = 0; i < this.plates.length; i++) {
        if(this.plates[i].idChef != id){
          newPlates.push(this.plates[i])
        }
      }
      localStorage.setItem("plates",JSON.stringify(newPlates))
    }
    // suppression user
    let pos:any;
    for(let i=0; i<this.users.length;i++){
      if(this.users[i].id == id){
        pos=i;
        break;
      }
    }
  this.users.splice(pos,1)
  localStorage.setItem('users',JSON.stringify(this.users))
  }
  editUser(id:any,role:any){
    switch(role){
      case 'admin':
        this.router.navigate([`editUser/${id}`])
        break;
      case 'client':
        this.router.navigate([`editUser/${id}`])
        break;
      case 'chef':
        this.router.navigate([`editChef/${id}`])
        break;
    }
  }
  getColor(speciality:any){
      switch(speciality){
        case 'TN':
          return 'red'
          break;
          case 'FR':
            return 'blue'
            break;
            case 'IT':
              return 'green'
              break;
              default:
                return 'white'
                break;
        } 
  }
}
