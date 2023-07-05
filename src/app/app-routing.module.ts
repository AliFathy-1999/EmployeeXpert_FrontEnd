import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { SigninComponent } from './signin/signin.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EmployeeMessagesComponent } from './employee-messages/employee-messages.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { EmployeeAttendanceComponent } from './User-attendance/employee-attendance/employee-attendance.component';
import {AllEmployeeAttendanceComponent} from './Admin-attendance/all-employee-attendance/all-employee-attendance.component';
import {CheckinCheckoutComponent}from './User-attendance/checkin-checkout/checkin-checkout.component';
 
import { AddVacationComponent } from './add-vacation/add-vacation.component';
import { VacationDialogComponent } from './vacation-dialog/vacation-dialog.component';
import { GetEmployeeComponent } from './employee/get-employee/get-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { PayrollComponent } from './payroll/payroll.component';
import { EmployeePayrollComponent } from './employee-payroll/employee-payroll.component';


const routes: Routes = [
{ path: '', component: SigninComponent },
{ path: 'addEmployee', component: AddEmployeeComponent},
{path:'Messages',component:EmployeeMessagesComponent},
{path:'Announcements',component:AnnouncementComponent},
{path:'allAttendance',component:AllEmployeeAttendanceComponent},
{path:'employeeAttendance',component:EmployeeAttendanceComponent},
{path:'checkinCheckout',component:CheckinCheckoutComponent},
  { path: 'signin', component: SigninComponent },
  { path: 'dashboard', component: DashComponent,},
{ path: 'addEmployee', component: AddEmployeeComponent},
{ path: 'addVacation', component: AddVacationComponent},
// { path: 'addVacation', component: AddVacationComponent},
  { path: 'getAllEmployees', component: GetEmployeeComponent},
  { path: 'updateEmployee/:id', component: UpdateEmployeeComponent},
  { path: 'employeeDetails/:id', component: EmployeeDetailsComponent},
  { path: 'payroll', component: PayrollComponent },
  { path: 'me/payroll', component: EmployeePayrollComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
   
