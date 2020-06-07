import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailURL ='http://ip/email';
  private numberOfUsersAhead='http://ip/email';
  constructor(private http: HttpClient) { }
  // check validation
  // and call post on click of submit from email-component
  postUserEmail(emailId : string) : string{
    console.log('user email is  : ', emailId);
    return "Got ya";
    // return this.http.post(this.emailURL, emailId, {responseType: 'text'});
  }
 // You're on the list with n others
 getUsersAhead(){
  return this.http.get(this.numberOfUsersAhead);
 }
}
