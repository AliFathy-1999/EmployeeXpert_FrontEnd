import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './authentication/signin/signin.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserserviceService } from './services/userservice.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { AuthInterceptProvidoer } from './services/auth.interceptor';
import { EmployeeMessagesComponent } from './employee-messages/employee-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    EmployeeMessagesComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule ,
    MatIconModule
  ],
  providers: [UserserviceService,AuthInterceptProvidoer],
  bootstrap: [AppComponent]
})
export class AppModule { }
