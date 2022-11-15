import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.css']
})
export class PlatComponent implements OnInit {
  // declaration d'une variable de type @Input pour récuperer les données du component parent (popular-dishes) au component child (plate)
  @Input() childPlate : any;
  @Output() newPlates = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  deletePlate(id:any){
    let plates = JSON.parse(localStorage.getItem("plates")||"[]")
    let pos:any;
    for(let i = 0 ; i < plates.length ; i++){
     if(plates[i].id == id){
      pos = i ;
     }
    }
    plates.splice(pos,1)
    localStorage.setItem("plates",JSON.stringify(plates))

    // declanchement de l'evennement
    this.newPlates.emit(plates)   
  }

}
