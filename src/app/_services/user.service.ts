import { Injectable, Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

import { User } from '../models/user';
import { HttpErrorResponse } from '@angular/common/http';
import { UserListComponent } from '../admin_panel/user-list/user-list.component';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable()
export class UserService {

  private USER_URL = 'http://localhost:8080/user';
  public respUser: User;
  public userOtp: string;
  public respUsers: User[];
  private userListComponent: UserListComponent;
  constructor(private httpClient: HttpClient , private router: Router) {

  }

  registerUser(user: User) {
    console.log(user);
    return this.httpClient.post(this.USER_URL + '/addUser', user, httpOptions)
    .subscribe(
      (data) => {
        console.log(data);
        this.respUser = <User> data;
        this.userOtp = this.respUser.otp;
        alert('User registred successfully!');
        this.router.navigate(['/otp']);
      },
      err => {
        console.log('User registration failed!');
      },
      () => {
        console.log('Post observable now complete!');
      }
    );
  }
  
  public getAllUsers(): Observable<Array<User>> {
   return this.httpClient
      .get<Array<User>>(this.USER_URL + '/getAllUsers');
  }
  
  public updateUser(user: User): Observable<User>{
    return this.httpClient.put<User>(this.USER_URL + '/updateUser' , user);
  }
  
//  public setComponentObject(comp: Component){
//      if(comp instanceof UserListComponent ){
//          this.userListComponent = comp;
//      }
//  }
  
  public verifyOTP(otp: string): boolean{
    return null;
  }
  
  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
    console.log('inside handleError method of user registration service');
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('inside log method of user registration service');
    console.log(message);
    // this.messageService.add('HeroService: ' + message);
  }

  authenticateUser(phoneNumber: number , password: string): boolean {
    // let body = {userPhoneNumber:phoneNumber , userPassword:password};
    // return this.http.post(this.baseURL , JSON.stringify(body) ,
    //  {headers: this.headers})
    // 				.toPromise()
    // 				.then(response => response.json().data)
    // 				.catch(this.handleError)
    return true;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
