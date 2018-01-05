import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../_services/user.service';
import { User } from '../models/user';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
    user: User = new User();
    loading = false;
    returnUrl: string;
    submitted = false;
    private authenticationStatus: boolean;
    private location: Location;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService
        ) { }

    ngOnInit() {

            // reset login status
            // this.authenticationService.logout();
            if (localStorage.getItem('currentUser')) {
                this.router.navigate(['/home']);
                console.log('user already logged in');
            }else {
                console.log('user already not logged in');
            }

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    signIn() {
        // this.authenticationService.authenticateUser(this.user.phoneNumber , this.user.password)
        //     .then((authenticationStatus) => this.authenticationStatus = authenticationStatus);
        console.log(this.user.mobile , this.user.password);
        this.authenticationStatus = true;
        if (this.authenticationStatus) {
            localStorage.setItem('currentUser' , this.user.mobile);
            this.router.navigate(['/home']);
        }else {
            // show a message in user interface that the user is not authenticated.
            console.log('user is not authenticated!');
        }
        console.log('inside login method of login component!');

    }

    Register() {
        this.router.navigate(['/register']);
    }
}
