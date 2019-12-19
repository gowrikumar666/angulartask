import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { D3Component } from './d3/d3.component';


const routes: Routes = [
  { path: '', redirectTo:'/login', pathMatch:'full'},
  { path:'login', component:LoginComponent},
  { path: 'dashboard' , component:DashboardComponent},
  { path: 'mat-table', component: MatTableComponent},
  { path: 'd3', component: D3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
