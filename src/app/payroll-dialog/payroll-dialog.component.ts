import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-payroll-dialog',
  templateUrl: './payroll-dialog.component.html',
  styleUrls: ['./payroll-dialog.component.css']
})
export class PayrollDialogComponent implements OnInit{

  nameMessage!:string
  catMessage!:string
  bonus!: Number;
  grossSalary!: Number;
  oldData:any
  

  constructor(private _dialogRef: MatDialogRef<PayrollDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  payrollForm = new FormGroup({
    bonus: new FormControl(null, [Validators.required]),
    grossSalary: new FormControl(null, [Validators.required]),
  });

  submitData(payrollForm: FormGroup) {
    if (this.data) {
      const formData = new FormData();
      formData.append(
        'bonus',
        payrollForm.get('bonus')?.value ? payrollForm.get('bonus')?.value : this.oldData.bonus
      );
      formData.append(
        'grossSalary',
        payrollForm.get('grossSalary')?.value ? payrollForm.get('grossSalary')?.value : this.oldData.grossSalary
      );
      }
    //   this._book.editBook(this.data.id, formData).subscribe({
    //     next:(res: any) => {
    //       this._dialogRef.close(true);
    //     },
    //     error: (HttpErrorResponse) => {
    //       this.toastr.error(HttpErrorResponse.error.message);
    //     }
    // });
     }
    //else{
    //   const formData = new FormData();
    //   formData.append('name', payrollForm.get('name')?.value);
    //   formData.append('description', payrollForm.get('description')?.value);
    //   formData.append('categoryId', payrollForm.get('categoryId')?.value);
    //   formData.append('authorId', payrollForm.get('authorId')?.value);
    //   formData.append('bookImage', this.file[0]);



      // this._book.addBook(formData).subscribe({next:(res: any)=> {
      //     this._dialogRef.close(true);
      //   },error: (HttpErrorResponse) => {
      //     this.toastr.error(HttpErrorResponse.error.message);
      //   }
        
      // });
    
    
    
  


  ngOnInit(): void {
    this.payrollForm.patchValue(this.data);
  }

  closeDialog() {
    this._dialogRef.close();
  }

}
