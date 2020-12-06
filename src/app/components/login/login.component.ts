import { Component, OnDestroy, OnInit } from '@angular/core';
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

    usernameFormControl = new FormControl('', [
        Validators.required,
        Validators.minLength(4),
    ]);

    passwordFormControl = new FormControl('', [
        Validators.required,
        Validators.minLength(6),
    ]);

    getRoleUser(username, password) {
        this.loginService.getRoleUser(username, password)
            .subscribe(
                user => {
                    console.log(user);
                    if (user != null) {
                        this.checkAcc(user.role);
                        console.log(user.role);
                        
                        sessionStorage.setItem('keyLogin', JSON.stringify(user))
                        let element: HTMLElement = document.getElementById('close') as HTMLElement;
                        element.click()
                    } else alert("Email/Password invalid!")
                })
    }

    checkAcc(role) {
        switch (role) {
            case 'ADMIN': {
                this.setUser(this.user)
                this.router.navigate(['admin/Dashboard'])
                break;
            }
            case 'MANAGER': {
                this.setUser(this.user)
                this.router.navigate(['manager/Dashboard'])
                break;
            }
            case 'LECTURER': {
                this.setUser(this.user)
                this.router.navigate(['lecturer/Dashboard'])
                break;
            }
            case 'STUDENT': {
                this.setUser(this.user)
                this.router.navigate(['student/Dashboard'])
                break;
            }
            case 'GUARDIAN': {
                this.setUser(this.user)
                this.router.navigate(['guardian/Dashboard'])
                break;
            }
        }
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
