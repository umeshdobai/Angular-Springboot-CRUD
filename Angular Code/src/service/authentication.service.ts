import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  loggedInStatus:boolean;

  // authenticate(username, password) {
  //   if (username === "umesh" && password === "umesh123") {
  //     sessionStorage.setItem('username', username)
  //     return true;
  //   } 
  //   else {
  //     alert("Invalid username or password");
  //     return false;
  //   }
  // }
  getLoggedin(value:any){
    this.loggedInStatus=value;
  }

  isUserLoggedIn() {
    // let user = sessionStorage.getItem('username')
    // return !(user === null)
    return this.loggedInStatus;
  }

  logOut() {
    // sessionStorage.removeItem('username')
    return this.getLoggedin(false);
  }
}