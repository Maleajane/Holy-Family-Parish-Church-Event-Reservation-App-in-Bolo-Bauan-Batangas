import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router, private alertController: AlertController) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(async res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        const alert = await this.alertController.create({
          header: 'Successful Login!',
          buttons: ['OK'],
        });
    
        await alert.present()

        this.loginForm.reset();
        this.router.navigate(['home'])
      }else{
        const alert = await this.alertController.create({
          header: 'Failed!',
          message: 'User not found!',
          buttons: ['OK'],
        });
    
        await alert.present()
      }
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
