import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { SigninComponent } from './signin/signin.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { GetEmployeeComponent } from './employee/get-employee/get-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { PayrollComponent } from './payroll/payroll.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'dashboard', component: DashComponent},
  { path: 'addEmployee', component: AddEmployeeComponent},
  { path: 'getAllEmployees', component: GetEmployeeComponent},
  { path: 'updateEmployee/:id', component: UpdateEmployeeComponent},
  { path: 'employeeDetails/:id', component: EmployeeDetailsComponent},
  { path: 'payroll', component: PayrollComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
