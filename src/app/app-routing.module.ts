import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { SigninComponent } from './signin/signin.component';
import { NavComponent } from './nav/nav.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { PayrollComponent } from './payroll/payroll.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'dashboard', component: DashComponent,
},
{ path: 'addEmployee', component: AddEmployeeComponent},
  { path: 'payroll', component: PayrollComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
