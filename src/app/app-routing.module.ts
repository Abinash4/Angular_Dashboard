import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicDashboardComponent } from './basic-dashboard/basic-dashboard.component';


const routes: Routes = [
  {
    path:'basicDashboard',component:BasicDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
