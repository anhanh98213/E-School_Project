import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClassComponent } from './components/add-class/add-class.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { AddGuardianComponent } from './components/add-guardian/add-guardian.component';
import { AddLecturerComponent } from './components/add-lecturer/add-lecturer.component';
import { AddMajorComponent } from './components/add-major/add-major.component';
import { AddManagerComponent } from './components/add-manager/add-manager.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { AllClassComponent } from './components/all-class/all-class.component';
import { AllCourseComponent } from './components/all-course/all-course.component';
import { AllGuardianComponent } from './components/all-guardian/all-guardian.component';
import { AllLecturerComponent } from './components/all-lecturer/all-lecturer.component';
import { AllMajorComponent } from './components/all-major/all-major.component';
import { AllManagerComponent } from './components/all-manager/all-manager.component';
import { AllStudentComponent } from './components/all-student/all-student.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { DashboardGuardianComponent } from './components/dashboard-guardian/dashboard-guardian.component';
import { DashboardLecturerComponent } from './components/dashboard-lecturer/dashboard-lecturer.component';
import { DashboardManagerComponent } from './components/dashboard-manager/dashboard-manager.component';
import { DashboardStudentComponent } from './components/dashboard-student/dashboard-student.component';



const routes: Routes = [
  { path: 'admin/Dashboard', component: DashboardAdminComponent},
  { path: 'manager/Dashboard', component: DashboardManagerComponent},
  { path: 'student/Dashboard', component: DashboardStudentComponent},
  { path: 'lecturer/Dashboard', component: DashboardLecturerComponent},
  { path: 'guardian/Dashboard', component: DashboardGuardianComponent},

  {path: "admin/Dashboard/allManager", component: AllManagerComponent},
  {path: "admin/Dashboard/allLecturer", component: AllLecturerComponent},
  {path: "admin/Dashboard/allStudent", component: AllStudentComponent},
  {path: "admin/Dashboard/allGuardian", component: AllGuardianComponent},
  {path: "admin/Dashboard/allMajor", component: AllMajorComponent},
  {path: "admin/Dashboard/allCourse", component: AllCourseComponent},
  {path: "admin/Dashboard/allClass", component: AllClassComponent},

  {path: "admin/Dashboard/addManager", component: AddManagerComponent},
  {path: "admin/Dashboard/addLecturer", component: AddLecturerComponent},
  {path: "admin/Dashboard/addStudent", component: AddStudentComponent},
  {path: "admin/Dashboard/addGuardian", component: AddGuardianComponent},
  {path: "admin/Dashboard/addMajor", component: AddMajorComponent},
  {path: "admin/Dashboard/addCourse", component: AddCourseComponent},
  {path: "admin/Dashboard/addClass", component: AddClassComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
