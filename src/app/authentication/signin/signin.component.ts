import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';
import { MatFormFieldControl } from '@angular/material/form-field';
import {
  FormBuilder, FormGroup, Validators, FormControl
} from '@angular/forms';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent
  
  implements OnInit
{
  authForm!: FormGroup;
  submitted = false;
  loading = false;
  error = '';
  hide = true;
  constructor(
    private formBuilder:FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _userServices:UserserviceService
    
  ) {
   
  }


  ngOnInit() {
    this.authForm = this.formBuilder.group({
      userName: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25),
          Validators.pattern(/^[^\s]*$/)
          
        ])
      ],
      password: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25),
          Validators.pattern(/^[^\s]*$/)

        ])
      ]
    });
    
  }

 
  
  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.error =''
    console.log(this.authForm.value)
    this._userServices.login(this.authForm.value, 'signin').subscribe(
      (res) => {
      if(res.data.token){
         localStorage.setItem('userToken', res.data.token);
        this._userServices.saveCurrentUser();
      }else{
        this.error="not found this user"
      }
       
        // this._router.navigate(['/Dashboard']);
      },
      (err) => {
        this.loading = false;
      this.error = err.error.message ;
      }
    );      
    }
  }
