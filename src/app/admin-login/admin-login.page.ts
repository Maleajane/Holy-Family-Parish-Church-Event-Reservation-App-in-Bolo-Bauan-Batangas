import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage implements OnInit {

  public adminLoginForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router, private alertController: AlertController) { }

  ngOnInit(): void {
    this.adminLoginForm = this.formBuilder.group({
      uniqueId: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  adminLogin() {
    this.http.get<any>("http://localhost:3000/adminAccount")
    .subscribe(async res=>{
      const user = res.find((a:any)=>{
        return a.uniqueId === this.adminLoginForm.value.uniqueId && a.password === this.adminLoginForm.value.password
      });
      if(user){
        const alert = await this.alertController.create({
          header: 'Success!',
          message: 'Logged in as Administrator',
          buttons: ['OK'],
        });
    
        await alert.present()

        this.adminLoginForm.reset();
        this.router.navigate(['admin-home'])
      }else{
        const alert = await this.alertController.create({
          header: 'Failed Login!',
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
