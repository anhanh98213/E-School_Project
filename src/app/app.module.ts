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
import { LoginComponent } from './components/login/login.component';

import { DashboardStudentComponent } from './components/dashboard-student/dashboard-student.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardManagerComponent } from './components/dashboard-manager/dashboard-manager.component';
import { DashboardGuardianComponent } from './components/dashboard-guardian/dashboard-guardian.component';
import { DashboardLecturerComponent } from './components/dashboard-lecturer/dashboard-lecturer.component';
import { AllManagerComponent } from './components/all-manager/all-manager.component';
import { AllLecturerComponent } from './components/all-lecturer/all-lecturer.component';
import { AllStudentComponent } from './components/all-student/all-student.component';
import { AllGuardianComponent } from './components/all-guardian/all-guardian.component';
import { AllMajorComponent } from './components/all-major/all-major.component';
import { AllCourseComponent } from './components/all-course/all-course.component';
import { AllClassComponent } from './components/all-class/all-class.component';
import { AddManagerComponent } from './components/add-manager/add-manager.component';
import { AddLecturerComponent } from './components/add-lecturer/add-lecturer.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AddMajorComponent } from './components/add-major/add-major.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddClassComponent } from './components/add-class/add-class.component';
import { AddGuardianComponent } from './components/add-guardian/add-guardian.component';
import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    DashboardStudentComponent,
    DashboardAdminComponent,
    DashboardManagerComponent,
    DashboardGuardianComponent,
    DashboardLecturerComponent,
    AllManagerComponent,
    AllLecturerComponent,
    AllStudentComponent,
    AllGuardianComponent,
    AllMajorComponent,
    AllCourseComponent,
    AllClassComponent,
    AddManagerComponent,
    AddLecturerComponent,
    AddStudentComponent,
    AddMajorComponent,
    AddCourseComponent,
    AddClassComponent,
    AddGuardianComponent,
    ProfileComponent
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
