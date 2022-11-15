import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PopularDishesComponent } from './popular-dishes/popular-dishes.component';
import { HistoryComponent } from './history/history.component';
import { VideoComponent } from './video/video.component';
import { PopularMenuComponent } from './popular-menu/popular-menu.component';
import { ChefsComponent } from './chefs/chefs.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { NewsComponent } from './news/news.component';
import { BindingComponent } from './binding/binding.component';
import { LoginComponent } from './login/login.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AddChefComponent } from './add-chef/add-chef.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { DashboardChefComponent } from './dashboard-chef/dashboard-chef.component';
import { PlatComponent } from './plat/plat.component';
import { ChefComponent } from './chef/chef.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PopularDishesComponent,
    HistoryComponent,
    VideoComponent,
    PopularMenuComponent,
    ChefsComponent,
    ReservationsComponent,
    TestimonialsComponent,
    NewsComponent,
    BindingComponent,
    LoginComponent,
    AddAdminComponent,
    SignupComponent,
    AddChefComponent,
    DashboardAdminComponent,
    AddPlatComponent,
    DashboardChefComponent,
    PlatComponent,
    ChefComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
