import { Component, OnInit } from '@angular/core';
import { EmployeeMessagesService } from '../service/employee-messages.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-employee-messages',
  templateUrl: './employee-messages.component.html',
  styleUrls: ['./employee-messages.component.css'],
})
export class EmployeeMessagesComponent implements OnInit {
  EmployeeMessages: any;
  allEmployees    : any = '';
  senderMessages  : any = '';
  sender          : any = '';
  Employees       : any = '';
  Employee        : any = '';
  currentUser           = { userName: 'nada', role: 'ADMIN' };   //authgard
  sentMessage!    : FormGroup;
  EmployeeName    : any = '';

  constructor(
    private _EmployeeMessages: EmployeeMessagesService,
    private formBuilder: FormBuilder
  ) {

    if (this.currentUser.role === 'USER') {
      this.getEmpMessages();
    } else {
      console.log("gjvjvhch")
      this.getAllEmployees();
    }
    
  }

  getEmpMessages() {
    this.EmployeeMessages = this._EmployeeMessages.getUserMessages().subscribe(
      (res: any) => {
        console.log(res.data);
        this.EmployeeMessages = res.data.reverse();
        this.getEmpData(res.data[0].sender).subscribe((result) => {
          this.sender = result;
        });
      },
      (err:any) => {
        console.log(err);
        this.EmployeeMessages = [];
      }
    );
  }

  getsenderMessages(emp: any) {
    console.log(emp._id)
    this.EmployeeMessages = this._EmployeeMessages
      .getAdminMessages(emp._id)
      .subscribe(
        (res: any) => {
          console.log(res.data);
          this.EmployeeMessages = res.data.reverse();
          this.Employee = emp;
          this.EmployeeName = `${emp.firstName}  ${emp.lastName} `;
        },
        (err:any) => {
          this.EmployeeMessages = [];
        }
      );
  }

  sendMessagestoEmp() {
    console.log(this.Employee)
    const data: any = {
      message: this.sentMessage.value.newMessage,
      title: 'message',
      employee: this.Employee._id,
    };
    
    this._EmployeeMessages.sendMessage(data).subscribe(
      (res:any) => {
        console.log()
        this.getsenderMessages(this.Employee);
      },
      (err:any) => {
        console.log(err);
      }
    );

    this.sentMessage.setValue({
      message:""
    })
  }

  getEmpData(id: string) {
    return this._EmployeeMessages.getEmpData(id);
  }

  getAllEmployees() {
    this._EmployeeMessages.getAllEmployees().subscribe((res: any) => {
      console.log(res.data);
      this.Employees = res.data.docs;
      this.EmployeeMessages = '';
    });
  }

  ngOnInit() {
    if (this.currentUser.role == 'ADMIN') {
      this.sentMessage = this.formBuilder.group({
        newMessage: [
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(300),
            this.notOnlyWhitespace,
          ]),
        ],
      });
    }
  }

  notOnlyWhitespace(control: FormControl): { [key: string]: boolean } | null {
    if (control.value && control.value.trim().length === 0) {
      return { notOnlyWhitespace: true };
    }
    return null;
  }   
}
   