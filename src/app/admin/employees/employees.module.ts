import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { EditEmployeesComponent } from './edit-employees/edit-employees.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';


@NgModule({
  declarations: [
    AllEmployeesComponent,
    AddEmployeesComponent,
    EditEmployeesComponent,
    EmployeeProfileComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
