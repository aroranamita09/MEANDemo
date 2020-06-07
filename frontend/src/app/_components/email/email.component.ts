import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/services/email.service';
import { AlertService } from '../../services/alert.service';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  submitted = false;
  firstFormGroup: FormGroup;

  constructor( 
    // private formBuilder: FormBuilder,
    // private router: Router,
    // private alertService: AlertService,
    // private emailService: EmailService
    ) { 
   
  }

  ngOnInit() {
    // this.firstFormGroup = this.formBuilder.group({
    //   emailId: ['', Validators.required]
    // });
  }
  onSubmit() {
    // this.submitted = true;
    //  // stop here if form is invalid
    //  if (this.firstFormGroup.invalid) {
    //   alert('register form is invalid ');
    //   return;
    // }
    // const object = Object.assign(this.firstFormGroup.value);
    // this.emailService.postUserEmail(object).subscribe(
    //   data=>{
    //     this.alertService.success(data,true);
    //     alert(data);
    //     //Here we can re-route to landing Page
    //     this.router.navigate(['/home']);
    //   },
    //   error => {
    //     this.alertService.error('email already exists');
    //     alert('error');
    //   }
    // );
  }
}
