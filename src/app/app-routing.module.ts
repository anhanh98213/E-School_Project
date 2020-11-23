import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
