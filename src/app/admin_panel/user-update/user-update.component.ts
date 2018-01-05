import { UserService } from '../../_services/user.service';
import { User } from '../../models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector:'app-user-update',
  templateUrl:'user-update.component.html',
  styleUrls: ['user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
    public updatedUser: User = new User();
    private id: string;
    private snapShot;
  
    constructor(private userService: UserService , private activatedRoute: ActivatedRoute) {
      this.snapShot = this.activatedRoute.snapshot;
    }
    
    ngOnInit(): void {
      console.log('Inside ngOnInit method of update user component!');
      this.id = this.snapShot.paramMap.get('id');
      alert(this.id);
      this.updatedUser.id = this.id;
    }
    
    public updateUser() {
      this.userService.updateUser(this.updatedUser).subscribe(data => { console.log(data); alert('User updated with id:' + data.id) });
    }
  
    public Logout(){
      this.userService.logout();
    }
  }