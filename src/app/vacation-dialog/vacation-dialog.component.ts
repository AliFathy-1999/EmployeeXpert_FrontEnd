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

// interface Vacations {
//   status: string;
//   viewStatus: string;
// }

@Component({
  selector: 'app-vacation-dialog',
  templateUrl: './vacation-dialog.component.html',
  styleUrls: ['./vacation-dialog.component.css']
})
export class VacationDialogComponent {
  nameMessage!:string
  status!: Status;
  employeeId!: Number;
  totalDays!: Number;

  oldData:any

  constructor(
    private _vacation:VocationServiceService,
    private toastr: ToastrService,
    private _dialogRef: MatDialogRef<VacationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  vacationForm = new FormGroup({
    employeeId: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
    totalDays: new FormControl(null, [Validators.required,Validators.min(0),Validators.max(21)]),
  });


  submitData(vacationForm: FormGroup) {
    if (this.data) {
      const formData =  {
        employeeId: vacationForm.get('employeeId')?.value ?? this.oldData?.employeeId ?? null,
        status: vacationForm.get('status')?.value ?? this.oldData?.status ?? null,
        totalDays: vacationForm.get('totalDays')?.value ?? this.oldData?.totalDays ?? null,
      };
    //   this._vacation.updateVacation(this.data.id, formData).subscribe({
    //     next:(res: any) => {
    //       this._dialogRef.close(true);
    //     },
    //     error: (HttpErrorResponse) => {
    //       this.toastr.error(HttpErrorResponse.error.message);
    //     }
    // });
    }else{
      const formData = {
        employeeId: vacationForm.get('employeeId')?.value,
        status: vacationForm.get('status')?.value,
        totalDays: vacationForm.get('totalDays')?.value,
      };

// console.log(formData.get(this.employeeId).valueOf);
      this._vacation.addVacationByAdmin(formData).subscribe({next:(res: any)=> {
          this._dialogRef.close(true);
        },error: (HttpErrorResponse) => {
          this.toastr.error(HttpErrorResponse.error.message);
        }
        
      });
    }


    
  }


  // ngOnInit(): void {
  //   this.vacationForm.patchValue(this.data);
  // }

  closeDialog() {
    this._dialogRef.close();
  }
}
