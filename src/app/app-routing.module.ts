import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './authentication/signin/signin.component';
import { MainLayoutComponent } from './layout/app-layout/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layout/app-layout/auth-layout/auth-layout.component';
import { Role } from './core';

  const routes: Routes = [
    { path: 'signin', component:SigninComponent },
    {
      path: '',
      component: MainLayoutComponent,
      canActivate: [],
      children: [
        { path: '', redirectTo: '/signin', pathMatch: 'full' },
        {
          path: 'admin',
          canActivate: [],
          data: {
            role: Role.Admin,
          },
          loadChildren: () =>
            import('./admin/admin.module').then((m) => m.AdminModule),
        },
        {
          path: 'employee',
          canActivate: [],
          data: {
            role: Role.Employee,
          },
          loadChildren: () =>
            import('../app/admin/employees/employees.module').then((m) => m.EmployeesModule),
        },
      ],
    },
    {
      path: 'authentication',
      component: AuthLayoutComponent,
      loadChildren: () =>
        import('./authentication/authentication.module').then(
          (m) => m.AuthenticationModule
        ),
    },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
