import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  formData:any ;
  ngOnInit(): void {
    this.formData = new FormGroup({
      userName:new FormControl('' , [Validators.required]),
      password:new FormControl('' , [Validators.required])
  });
  }
  constructor(private formBuilder: FormBuilder,private _global:GlobalService) {

  }

  onSubmit(){
    this._global.signIn(this.formData.value).subscribe((res:any) =>{
      sessionStorage.setItem('token',res.data.token);
    },(err)=>{
      console.log(err.message);

    })
  }
}
