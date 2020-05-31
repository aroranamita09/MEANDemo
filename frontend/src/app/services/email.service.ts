import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailURL ='http://ip/email';
  private numberOfUsersAhead='http://ip/email';
  constructor(private http: HttpClient) { }
  // check validation
  // and call post on click of submit from email-component
  postUserEmail(emailId : string) : Observable <any>{
    console.log('user email is  : ', emailId);
    return this.http.post(this.emailURL, emailId, {responseType: 'text'});
  }
 // You're on the list with n others
 getUsersAhead(){
  return this.http.get(this.numberOfUsersAhead);
 }
}
