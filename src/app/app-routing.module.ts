import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './authentication/signin/signin.component';
import { EmployeeMessagesComponent } from './employee-messages/employee-messages.component';
import { AnnouncementComponent } from './announcement/announcement.component';
const routes: Routes = [
   {path:'',component:SigninComponent},
   {path:'Messages',component:EmployeeMessagesComponent},
   {path:'Annnouncements',component:AnnouncementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
