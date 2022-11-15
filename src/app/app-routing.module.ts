import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddChefComponent } from './add-chef/add-chef.component';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { BindingComponent } from './binding/binding.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardChefComponent } from './dashboard-chef/dashboard-chef.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'login', component : LoginComponent},
  {path: 'signup', component : SignupComponent},
  {path: 'binding', component : BindingComponent},
  {path: 'addAdmin', component : AddAdminComponent},
  {path: 'addChef', component : AddChefComponent},
  {path: 'addPlat',component:AddPlatComponent},
  {path: 'dashboardAdmin', component : DashboardAdminComponent},
  {path: 'dashboardChef', component : DashboardChefComponent},
  // dynamic path
  {path: 'editUser/:id',component:AddAdminComponent},
  {path: 'editChef/:id',component:AddChefComponent},
  {path: 'editPlate/:id',component:AddPlatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
