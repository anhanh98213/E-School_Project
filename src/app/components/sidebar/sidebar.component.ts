import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  panelOpenState = false;

  user = JSON.parse(sessionStorage.getItem('keyLogin'))

  accAdmin = null;
  accManager = null;
  accLecturer = null;
  accStudent = null;
  
  constructor() { }

  ngOnInit(): void {
    if(this.user != null) this.checkAcc()
  }

  checkAcc(){
    switch (this.user.role) {
      case 'ADMIN': {
        this.setAcc();
        this.accAdmin = "show";
        break;
      }
      case 'MANAGER': {
        this.setAcc();
        this.accManager = "show";
        break;
      }
      case 'LECTURER': {
        this.setAcc();
        this.accLecturer = "show";
        break;
      }
      case 'STUDENT': {
        this.setAcc();
        this.accStudent = "show";
        break;
      }
    }
}

setAcc(){
  this.accAdmin = null;
  this.accManager = null;
  this.accLecturer = null;
  this.accStudent = null;
}

}
