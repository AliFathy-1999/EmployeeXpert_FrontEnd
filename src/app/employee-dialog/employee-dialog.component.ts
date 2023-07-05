import { Vacation } from './../vacation';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NgFor} from '@angular/common';
import { VocationServiceService } from '../service/vocation-service.service';
import { Status } from './../vacation';
import { AddVacationComponent } from '../add-vacation/add-vacation.component';
import { VacationDialogComponent } from '../vacation-dialog/vacation-dialog.component';
import { EmployeeVacarionComponent } from '../employee-vacation/employee-vacation.component';
@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css']
})
export class EmployeeDialogComponent {

  vacationForm: FormGroup;
  nameMessage!:string;
  oldData!: any;

constructor(private _vacation:VocationServiceService,
  private toastr: ToastrService,
  private _dialogRef: MatDialogRef<EmployeeDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data:any){
    // const tomorrow = new Date();
    // tomorrow.setDate(tomorrow.getDate() + 1);
    // const tomorrowString = tomorrow.toISOString().slice(0, 10);
    // const tomorrowTimestamp = Date.parse(tomorrowString) / 1000;

    // this.dateControl = new FormControl('', [
    //   Validators.required,
    //   Validators.pattern(/^\d{4}-\d{2}-\d{2}$/),
    //   Validators.min(tomorrowTimestamp)
    // ]);

  // /  const ToDay = new Date();
  //   ToDay.setDate(ToDay.getDate());
  //   const toDayString = ToDay.toISOString().slice(0, 10);
  //   const toDayTimestamp = Date.parse(toDayString) / 1000;

    // this.dateControl2 = new FormControl('', [
    //   Validators.required,
    //   Validators.pattern(/^\d{4}-\d{2}-\d{2}$/),
    //   Validators.min(toDayTimestamp)
    // ]);

    this.vacationForm = new FormGroup({
      reasonForVacation: new FormControl(null, [Validators.required]),
      fromDay: new FormControl(null, [Validators.required]),
      toDay: new FormControl(null, [Validators.required]),
      totalDays: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(21)]),
    });
  }

  submitData(vacationForm: FormGroup) {
    
    if (this.data) {
      
      if (this.vacationForm.valid) {
        const vacationObj = {
          reasonForVacation: vacationForm.get('reasonForVacation')?.value !== null && vacationForm.get('reasonForVacation')?.value !== undefined ? vacationForm.get('reasonForVacation')?.value : this.oldData.reasonForVacation,
          totalDays: vacationForm.get('totalDays')?.value ? vacationForm.get('totalDays')?.value : this.oldData.totalDays,
          fromDay: vacationForm.get('fromDay')?.value ? vacationForm.get('fromDay')?.value : this.oldData.fromDay,
          toDay: vacationForm.get('toDay')?.value ? vacationForm.get('toDay')?.value : this.oldData.toDay
        };
        console.log(vacationObj.reasonForVacation);
        console.log(vacationObj.totalDays);
        console.log(vacationObj.fromDay);

        console.log(vacationObj.toDay);
        
        this._vacation.updateVacation(this.data._id,vacationObj).subscribe({
        next:(res: any) => {
          this._dialogRef.close(true);
          // this.toastr.success("Data Updated Successfully");
        },
        error:  (error: any) => {
         console.log(this.data._id)
          // this.toastr.error(error.error.message);
        }
        })
     }
    }
    }
  closeDialog() {
    this._dialogRef.close();
  }
}