import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  public signupForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router, private alertController: AlertController) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  signup() {
    this.http.post<any>("http://localhost:3000/signupUsers", this.signupForm.value)
    .subscribe(async res=>{
      const alert = await this.alertController.create({
        header: 'Successful Sign Up!',
        buttons: ['OK'],
      });
      await alert.present()

      this.signupForm.reset();
      this.router.navigate(['login']);
    },async err=>{
      const alert = await this.alertController.create({
        header: 'Oops!',
        subHeader: 'Something went wrong!',
        message: 'Try again later.',
        buttons: ['OK'],
      });
  
      await alert.present()
    })
  }

}
