import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import {MatBadgeModule} from '@angular/material/badge';
import { EmployeeMessagesService } from '../service/employee-messages.service';
import { AnnouncementService } from '../service/announcement.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  messageNotifications :boolean = false;
  announcementNotifications :boolean = false;
  currentUser = {role:'USER'}
  announcements : any = ''
  empMessages:any = ''
  

  private breakpointObserver = inject(BreakpointObserver);
  menuItems = ['signin','dashboard', 'addEmployee', 'getEmployees', 'customers', 'products'];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    constructor(private router:Router , 
      private _EmployeeMessages: EmployeeMessagesService , private _Announcements: AnnouncementService){
        if(this.currentUser.role =='USER'){

         this._Announcements.getAnnouncements().subscribe((res:any)=>{
         this.announcements=res.data})}
         this._EmployeeMessages.getUserMessages().subscribe((res:any)=>{
         this.empMessages=res.data})
        
         this.checkifNewMessages()
         this.checkifNewAnnouncements()
        
        }
        
      
    
    gotopage(page:string){
      this.router.navigate([`${page}`])
    }

  

    toggleMessageBadgeVisibility(){
      this.messageNotifications = false
    }
    toggleAnnouncementBadgeVisibility(){
      this.announcementNotifications = false
    }

    checkifNewMessages(){

      interval(4000).subscribe(() => {
        console.log("send")
        this._EmployeeMessages.getUserMessages().subscribe((res:any)=>{
          console.log(res.data.length,this.empMessages.length)
        if(res.data.length>this.empMessages.length){
          this.messageNotifications = true
          console.log("recieved")
          this.announcements=res.data
        }
        });
      });
    }

    checkifNewAnnouncements(){

      interval(4000).subscribe(() => {
        console.log("send")
        this._Announcements.getAnnouncements().subscribe((res:any)=>{
          console.log(res.data.length,this.announcements.length)
        if(res.data.length>this.announcements.length){
          this.announcementNotifications= true
          console.log("recieved")
          this.announcements=res.data
        }
        });
      });
    }


  }          