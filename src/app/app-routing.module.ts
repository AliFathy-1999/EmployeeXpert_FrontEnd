import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { SigninComponent } from './signin/signin.component';
import { NavComponent } from './nav/nav.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';

import { EmployeeMessagesComponent } from './employee-messages/employee-messages.component';
import { AnnouncementComponent } from './announcement/announcement.component';

  


const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'dashboard', component: DashComponent,
},
{ path: 'addEmployee', component: AddEmployeeComponent},
{path:'Messages',component:EmployeeMessagesComponent},
{path:'Announcements',component:AnnouncementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
