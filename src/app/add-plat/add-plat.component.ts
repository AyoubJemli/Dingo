import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatService } from '../services/plat.service';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {
  plate : any = {};
  addPlateForm : FormGroup;
  id:any;
  title:any;
  plates:any;
  constructor(private formBuilder : FormBuilder,private activatedRoute : ActivatedRoute,private router : Router, private platService:PlatService) { }
    ngOnInit() {
        this.getPlateById();
        this.addPlateForm = this.formBuilder.group({
          plateName : [''],
          price : [''],
          description : [''],
        })
        this.plates = JSON.parse(localStorage.getItem("plates")||"[]")
        this.id = this.activatedRoute.snapshot.paramMap.get('id')
        if(this.id){
          this.title = "Edit Plate"
          for(let i=0; i<this.plates.length;i++){
            if(this.plates[i].id == this.id){
                this.plate = this.plates[i];
            }
          }
        }else{
          this.title = "Add Plate"
        }
    }
  addOrEditPlate(){
    if(this.id){
      // for(let i=0;i<this.plates.length;i++){
      //   if(this.plates[i].id == this.id){
      //     this.plates[i] = this.plate;
      //   }
      // }
      // localStorage.setItem("plates",JSON.stringify(this.plates))
      
      this.platService.updatePlate(this.plate).subscribe((res:any)=>{
        console.log(res.newPlate);
      })
    }else{
      this.platService.addPlate(this.plate).subscribe((res:any)=>{
        console.log(res.ok);
  })
      // let idPlate = JSON.parse(localStorage.getItem("idPlate")||"1")
      // let plates = JSON.parse(localStorage.getItem("plates")||"[]")
      // this.plate.id = idPlate;
      // let connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
      // this.plate.idChef = connectedUser.id;
      // plates.push(this.plate)
      // localStorage.setItem("plates",JSON.stringify(plates))
      // localStorage.setItem("idPlate",idPlate + 1)
    }
 
 
  }
  getPlateById(){
    this.platService.getPlateByID(this.id).subscribe((res)=>{
      this.plate = res.plate;
    })
  }
}
