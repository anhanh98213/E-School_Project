import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ESchoolService } from 'src/app/eSchool.service';
import { User } from 'src/app/models/user';
import { LoginService } from '../login/login.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    user: User
    loginUser = null
    id: String

    constructor(private router: Router, private loginService: LoginService, private eSchoolService: ESchoolService) {

    }

    ngOnInit(): void {
    }

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    passwordFormControl = new FormControl('', [
        Validators.required,
        Validators.email,
    ]);

    getRoleUser(username, password) {
        this.loginService.getTypeUser(username, password)
            .subscribe(
                data => {
                    this.user = data
                    if (data == null || username == null || password == null) {
                        this.loginUser = "mail"
                        console.log(this.loginUser)
                    } else {
                        let element: HTMLElement = document.getElementsByClassName('closeLogin')[0] as HTMLElement;
                        element.click();
                        if (this.user.role == 'admin') {
                            this.setUser(this.user)
                            this.router.navigate(['admin/Dashboard'])
                            console.log(this.user.username)
                        } else if (this.user.role == 'manager') {
                            this.setUser(this.user)
                            this.router.navigate(['manager/Dashboard'])
                        } else if (this.user.role == 'lecturer') {
                            this.setUser(this.user)
                            this.router.navigate(['lecturer/Dashboard'])
                        } else if (this.user.role == 'student') {
                            this.setUser(this.user)
                            this.router.navigate(['student/Dashboard'])
                        } else if (this.user.role == 'guardian') {
                            this.setUser(this.user)
                            this.router.navigate(['guardian/Dashboard'])
                        }
                    }
                })
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('user')
        return !(user === null)
    }

    getUser(): User {
        let user: User = null
        user = JSON.parse(sessionStorage.getItem('user'))
        return user
    }

    setUser(user: User) {
        sessionStorage.setItem('user', JSON.stringify(user))
    }

    logOut() {
        sessionStorage.removeItem('user')
        this.router.navigate(['/Homepage'])
    }

}
