import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { D3Component } from './d3/d3.component';

import { ServiceService } from './service.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MatTableComponent,
    D3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  
    
  ],
  providers: [ ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
