import { Component } from '@angular/core';
import { AnnouncementService } from '../services/announcement.service';
import { DatePipe } from '@angular/common';
import{
FormBuilder,
FormGroup,
Validators,
FormControl,
FormsModule,
ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent {
    allAnnouncements :any = []
    currentUser     :any = {role:"ADMIN"}
    newAnnouncement!: FormGroup;
   constructor(private _announcements:AnnouncementService,private formBuilder: FormBuilder){

    this.getAllAnouncements()
  }

  getAllAnouncements(){
    this._announcements.getAnnouncements().subscribe((res:any)=>{

      console.log(res)
      this.allAnnouncements = res.data.reverse()

    },(err)=>{
      console.log(err)
    })
  }

  sendNewAnnouncement(){
    
  this._announcements.sendAnnouncement(
      {"message":this.newAnnouncement.value.newMessage,"title":this.newAnnouncement.value.title}).subscribe(
        (res)=>{
          console.log(res)
          this.getAllAnouncements()
      },(err)=>{
         console.log(err)
      })
  }

  ngOnInit() {
    if (this.currentUser.role == 'ADMIN') {
      this.newAnnouncement = this.formBuilder.group({
        newMessage: [
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(300),
            this.notOnlyWhitespace,
          ]),
        ],
        title: [
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(300),
            this.notOnlyWhitespace,
          ]),
        ]
      });
    }
  }

  notOnlyWhitespace(control: FormControl): { [key: string]: boolean } | null {
    if (control.value && control.value.trim().length === 0) {
      return { notOnlyWhitespace: true };
    }
    return null;
  }

  calculateTime(time:any){
   
const timestamp = new Date(time).getTime(); 
const now = Date.now(); 
const diff = now - timestamp;
const days = Math.floor(diff/ (1000 * 60 * 60 * 24));
if(days<=0) return "Today  "

if(days==1) return "DAY AGO  "

return `${days} DAYS AGO  `

}}