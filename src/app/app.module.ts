import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserserviceService } from './services/userservice.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { AuthInterceptProvidoer } from './services/auth.interceptor';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { MainComponent } from './admin/dashboard/main/main.component';
import { MainLayoutComponent } from './layout/app-layout/main-layout/main-layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { PageLoaderComponent } from './layout/page-loader/page-loader.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { CoreModule } from './core';
import { SharedModule } from './shared';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AuthLayoutComponent } from './layout/app-layout/auth-layout/auth-layout.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    PageLoaderComponent,
    AuthLayoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule ,
    MatIconModule,
    LoadingBarModule,
    CoreModule,
    SharedModule,
    NgScrollbarModule,
  ],
  providers: [UserserviceService,AuthInterceptProvidoer],
  bootstrap: [AppComponent]
})
export class AppModule { }
