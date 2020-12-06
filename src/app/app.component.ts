import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-School';
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  user = JSON.parse(sessionStorage.getItem('keyLogin'))
  login = null;
  logout = null;
  accAdmin = null;
  accManager = null;
  accLecturer = null;
  accStudent = null;
  accGuardian = null;

  constructor(private router: Router) { }

  ngOnInit(): void { 
    this.showLogin()
  }

  ngDoCheck(){
    let a = this.user
    this.user = JSON.parse(sessionStorage.getItem('keyLogin'))
    if(this.user != a ){
      this.showLogin()
    }
  }

  showLogin() {
    this.setAcc();
    if (this.user != null) {
      switch (this.user.role) {
        case 'ADMIN': {
          this.accAdmin = "show";
          break;
        }
        case 'MANAGER': {
          this.accManager = "show";
          break;
        }
        case 'LECTURER': {
          this.accLecturer = "show";
          break;
        }
        case 'STUDENT': {
          this.accStudent = "show";
          break;
        }
        case 'GUARDIAN': {
          this.accGuardian = "show";
          break;
        }
      }
    } else {
      this.logout = null;
      this.login = 'login';
    }
  }

  logOut() {
    this.setAcc();
    this.logout = null;
    this.login = 'login';
    sessionStorage.clear()
    this.router.navigate(['/'])
  }
  
  setAcc(){
    this.login = null;
    this.accAdmin = null;
    this.accManager = null;
    this.accLecturer = null;
    this.accStudent = null;
    this.accGuardian = null;
    this.logout = "logout";
  }

}

