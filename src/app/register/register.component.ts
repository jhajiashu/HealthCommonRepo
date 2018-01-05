import { Component } from '@angular/core';
import { User } from '../models/user';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component ({
    selector : 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['register.component.css']
})

export class RegisterComponent implements OnInit {

    confPassword: string;
    user: User;
    response: User;

    constructor(private router: Router , private userService: UserService) {

    }

    ngOnInit(): void {
      this.user = new User();
    }

    public registerUser(): void {
        console.log('inside register method of register component');
        // this.router.navigate(['/otp']);
         this.userService.registerUser(this.user);
        console.log("at last of registerUser method inside of register component!");
    }

    public ifPasswordMatched(): boolean {
        if (this.user.password === this.confPassword) {
            console.log('password matched!');
            return true;
        }else {
            console.log('password not matched!');
            return false;
        }
    }

    public Login(): void {
        this.router.navigate(['/login']);
    }

}
