import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChefService {
chefUrl="http://localhost:3000/chef"
  constructor(private sender:HttpClient) {}
  addChef(user:any){
    console.log("this service has",user);
    return this.sender.post<{ok:any}>(this.chefUrl,user);
  }
  getAllChefs(){
    
  }
  deleteChef(id:any){

  }
}
