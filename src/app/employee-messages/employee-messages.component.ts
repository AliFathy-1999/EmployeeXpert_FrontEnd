import { Component } from '@angular/core';
import { EmployeeMessagesService } from '../services/employee-messages.service';
@Component({
  selector: 'app-employee-messages',
  templateUrl: './employee-messages.component.html',
  styleUrls: ['./employee-messages.component.scss']
})
export class EmployeeMessagesComponent {
    
  EmployeeMessages : any = '';
  allEmployees     : any = '';
  senderMessages   : any = '';
  sender           : any = '';
  Employees        : any = '';
  currentUser  = {userName:'nada' , role:'user'}

  constructor(private _EmployeeMessages:EmployeeMessagesService){
        
    this.getEmpMessages();

  }

  getEmpMessages(){

    this._EmployeeMessages.getUserMessages().subscribe(
      (res) => {
            console.log(res)
             this.EmployeeMessages = res.data
      }
    ); 
  }

  getsenderMessages(empId:string){

   this.senderMessages = this._EmployeeMessages.getAdminMessages(empId)?this._EmployeeMessages.getAdminMessages(empId):"no messages has been sent to this employee"
   return  this.senderMessages
     
  }

  sendMessagestoEmp(){

  }

}
