import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  plateUrl="http://localhost:3000/plat"
  constructor(private sender:HttpClient) {}
  addPlate(plate:any){
    return this.sender.post<{ok : any}>(this.plateUrl,plate);
  }
  getAllPlates(){
    return this.sender.get<{plates : any}>(this.plateUrl)
  }
  deletePlate(id:any){
    return this.sender.delete<{message :any}>(`${this.plateUrl}/${id}`)
  }
  getPlateByID(id:any){
    return this.sender.get<{plate : any}>(`${this.plateUrl}/${id}`)
  }
  updatePlate(plat:any){
    return this.sender.put<{newPlate : any}>(`${this.plateUrl}/${plat._id}`,plat)
  }
}
