import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    patients = [{name: 'Mr. Amit'}, {name: 'Mr. Ashu'}, {name: 'Mr. Pankaj'}, {name: 'Mr. Alok'}, {name: 'Mr. Aman'}];

    constructor(private userService: UserService , private router: Router ) {

    }

    public logout(): void {
        this.userService.logout();
    }

    public goToPatientDetail(): void {
        this.router.navigate(['/patient-detail']);
    }

    public addPatient(): void {
        this.router.navigate(['/add-patient']);
    }
}
