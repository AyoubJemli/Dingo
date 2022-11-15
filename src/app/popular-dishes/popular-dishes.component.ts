import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-dishes',
  templateUrl: './popular-dishes.component.html',
  styleUrls: ['./popular-dishes.component.css']
})
export class PopularDishesComponent implements OnInit {
  plates:any;
  constructor() { }
  ngOnInit() {
    this.plates = JSON.parse(localStorage.getItem('plates')||'[]')
  }
  update(event:any){
    this.plates = event;
  }
}
