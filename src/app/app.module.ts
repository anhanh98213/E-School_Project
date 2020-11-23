import 'zone.js/dist/zone';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MaterialModule} from '../app/material-module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';

import { DashboardStudentComponent } from './components/dashboard-student/dashboard-student.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardManagerComponent } from './components/dashboard-manager/dashboard-manager.component';
import { DashboardGuardianComponent } from './components/dashboard-guardian/dashboard-guardian.component';
import { DashboardLecturerComponent } from './components/dashboard-lecturer/dashboard-lecturer.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomepageComponent,
    LoginComponent,
    DashboardStudentComponent,
    DashboardAdminComponent,
    DashboardManagerComponent,
    DashboardGuardianComponent,
    DashboardLecturerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,

  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
