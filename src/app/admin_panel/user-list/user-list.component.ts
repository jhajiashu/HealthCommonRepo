import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { User } from '../../models/user';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html',
  styleUrls: ['user-list.component.css'] 
})
export class UserListComponent implements OnInit {
  
  constructor( private userService: UserService , private router: Router ){}
  private title = 'user list';
  public users: Array<User> = null;
  private response: any;
  
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data => {this.users = data; console.log(this.users)});

  }
  
  public updateUser(userId: string){
   // this.userService.updateUser(user).subscribe(data => { console.log(data); alert('User updated with id:' + data.user_id) });
    this.router.navigate(['/update-user', userId ]);
  }
  
  public deleteUser(userId: number){
    
  }
  
  public Logout(): void {
    this.userService.logout();
  }
  
}