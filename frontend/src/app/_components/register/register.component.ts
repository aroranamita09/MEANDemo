import { Component, OnInit } from '@angular/core';
import { EmailService } from './../../services/email.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // submitted = false;
  x=5;
  // firstFormGroup: FormGroup;
  // secondFormGroup: FormGroup;
  constructor(
    // private formBuilder: FormBuilder,
    // private router: Router,
    // private emailService: EmailService,
    // private alertService: AlertService
  ) { }

  ngOnInit() {
    // this.firstFormGroup = this.formBuilder.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   emailId: ['', Validators.required],
    //   password: ['', [Validators.required, Validators.minLength(7)]],
    //   interest: ['', Validators.required],
    //   username: ['', Validators.required],
    // });
    // this.secondFormGroup = this.formBuilder.group({
    //   gender: [''],
    //   age: [''],
    //   college: [''],
    //   course: [''],
    //   discipline: [''],
    //   company: ['']
    // });
  }

  // onSubmit() {
  //   this.submitted = true;

  //   // stop here if form is invalid
  //   if (this.firstFormGroup.invalid) {
  //     alert('register form is invalid ');
  //     return;
  //   }
  //   var x=this.emailService.getUsersAhead();
  //   const object = Object.assign(this.firstFormGroup.value, this.secondFormGroup.value);
  //   this.emailService.postUserEmail(object).subscribe(
  //     data => {
  //        this.alertService.success(data, true);
  //        alert(data);
  //        this.router.navigate(['/landing']);
  //     },
  //     error => {
  //       this.alertService.error('user already exists');
  //       alert('error');
  //     }
  //   );}
}
