import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { EmployeeMessagesComponent } from './employee-messages/employee-messages.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { SigninComponent } from './signin/signin.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { AuthInterceptProvidoer } from './Interceptor/interceptor.interceptor';
import { ToastrModule } from 'ngx-toastr';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { GetEmployeeComponent } from './employee/get-employee/get-employee.component';
import { EmployeeAttendanceComponent } from './User-attendance/employee-attendance/employee-attendance.component';
import { AllEmployeeAttendanceComponent } from './Admin-attendance/all-employee-attendance/all-employee-attendance.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator'; // Import MatPaginatorModule
import { MatTableModule } from '@angular/material/table';
import { CheckinCheckoutComponent } from './User-attendance/checkin-checkout/checkin-checkout.component'; // Import MatTableModule
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Import MatSnackBarModule

@NgModule({
  declarations: [
    AppComponent,
    EmployeeMessagesComponent,
    AnnouncementComponent,
    NavComponent,
    DashComponent,
    AddEmployeeComponent,
    GetEmployeeComponent,
    EmployeeAttendanceComponent,
    AllEmployeeAttendanceComponent,
    CheckinCheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatPaginatorModule, // Add MatPaginatorModule to the imports array
    MatTableModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSnackBarModule 
  ],
  providers: [
    AuthInterceptProvidoer
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
