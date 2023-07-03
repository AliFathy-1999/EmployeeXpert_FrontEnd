import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './authentication/signin/signin.component';
import { EmployeeMessagesComponent } from './employee-messages/employee-messages.component';
const routes: Routes = [
  // {path:'',component:SigninComponent}
  {path:'',component:EmployeeMessagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
