import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { SigninComponent } from './signin/signin.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { AddVacationComponent } from './add-vacation/add-vacation.component';
import { VacationDialogComponent } from './vacation-dialog/vacation-dialog.component';
import { GetEmployeeComponent } from './employee/get-employee/get-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { PayrollComponent } from './payroll/payroll.component';
import { EmployeePayrollComponent } from './employee-payroll/employee-payroll.component';
import { EmployeeVacarionComponent } from './employee-vacation/employee-vacation.component';
const routes: Routes = [
//   { path: 'signin', component: SigninComponent },
//   { path: 'dashboard', component: DashComponent,},
// { path: 'addEmployee', component: AddEmployeeComponent},
{ path: 'addVacation', component: AddVacationComponent},
// { path: 'addVacation', component: AddVacationComponent},
  { path: 'signin', component: SigninComponent },
  { path: 'dashboard', component: DashComponent},
  { path: 'addEmployee', component: AddEmployeeComponent},
  { path: 'getAllEmployees', component: GetEmployeeComponent},
  { path: 'updateEmployee/:id', component: UpdateEmployeeComponent},
  { path: 'employeeDetails/:id', component: EmployeeDetailsComponent},
  { path: 'payroll', component: PayrollComponent },
  { path: 'me/payroll', component: EmployeePayrollComponent },
  { path: 'employeeVacation', component: EmployeeVacarionComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
