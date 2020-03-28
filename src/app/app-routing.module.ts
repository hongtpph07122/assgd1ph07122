import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch : 'full'},
  {path:'home', component : HomeComponent },
  {path: 'admin', component : AdminComponent },
  {path:'**', component : NotFoundComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
