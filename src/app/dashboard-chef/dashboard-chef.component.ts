import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlatService } from '../services/plat.service';

@Component({
  selector: 'app-dashboard-chef',
  templateUrl: './dashboard-chef.component.html',
  styleUrls: ['./dashboard-chef.component.css']
})
export class DashboardChefComponent implements OnInit {
  plates:any;
  connectedUser:any;
  myPlates:any = [];
  constructor(private router:Router,private platService:PlatService) { }

  ngOnInit() {
    // this.plates = JSON.parse(localStorage.getItem('plates')||'[]')
    // this.connectedUser = JSON.parse(localStorage.getItem('connectedUser'))
    // // filtrage
    // for(let i = 0;i < this.plates.length;i++){
    //   if(this.plates[i].idChef == this.connectedUser.id){
    //     this.myPlates.push(this.plates[i])
    //   }
    // }
    this.getAllPlates();
  }
  deletePlate(id:any){
  //   let pos:any;
  //   for(let i=0; i<this.plates.length;i++){
  //     if(this.plates[i].id == id){
  //       pos=i;
  //       break;
  //     }
  //   }
  // this.plates.splice(pos,1)
  // localStorage.setItem('plates',JSON.stringify(this.plates))
  this.platService.deletePlate(id).subscribe((res:any)=>{
  console.log(res.message);
  this.getAllPlates();
    })
  }
  editPlate(id:any){
    this.router.navigate([`editPlate/${id}`])
  }
  getAllPlates(){
    this.platService.getAllPlates().subscribe((data)=>{
      this.plates = data.plates
    })
  }
  }
