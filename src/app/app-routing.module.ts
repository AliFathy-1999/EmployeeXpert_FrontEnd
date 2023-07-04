import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { SigninComponent } from './signin/signin.component';
import { PayrollComponent } from './payroll/payroll.component';

const routes: Routes = [
  // {path: '', redirectTo: 'signin'},
  { path: 'signin', component: SigninComponent },
  { path: 'dashboard', component: DashComponent },
  { path: 'payroll', component: PayrollComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
