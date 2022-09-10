import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './general/header/header.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './general/home/home.component';
import { AboutComponent } from './general/about/about.component';
import { ContactComponent } from './general/contact/contact.component';
import { ProductComponent } from './general/product/product.component';
import { AdminloginComponent } from './general/adminlogin/adminlogin.component';
import { LoginComponent } from './general/login/login.component';
import { RegisterComponent } from './general/register/register.component';
import { FootwareComponent } from './general/footware/footware.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './api.service';
// import{NgxPaginationModule}from 'ngx-pagination';
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    HomeComponent,
    AboutComponent,
    ContactComponent,
    FootwareComponent,
    ProductComponent,
    AdminloginComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule
    // NgxPaginationModule


  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
