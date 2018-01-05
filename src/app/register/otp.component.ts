import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service'
import { User } from '../models/user';

@Component({
    selector: 'app-otp',
    templateUrl: 'otp.component.html',
    styleUrls: ['otp.component.css']
})

export class OtpComponent implements OnInit {
  
  public oneTimePassword: string;

    constructor(private router: Router , private userService: UserService) {

    }
    
    ngOnInit(): void {
      this.oneTimePassword =  this.userService.userOtp;
      console.log("Inside otp component :" + this.oneTimePassword);
   }
    
    public verifyOTP(): void {
      this.userService.verifyOTP(this.oneTimePassword);
    }

    public Register(): void {
        this.router.navigate(['/register']);
    }
}
