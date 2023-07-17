import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-marriage',
  templateUrl: './marriage.page.html',
  styleUrls: ['./marriage.page.scss'],
})
export class MarriagePage implements OnInit {

  public marriageForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router, private alertController: AlertController) { }

  ngOnInit(): void {
    this.marriageForm = this.formBuilder.group({
      gfirstname: ['', Validators.required],
      glastname: ['', Validators.required],
      bfirstname: ['', Validators.required],
      maidenName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      date: ['', Validators.required],
      address: ['', Validators.required]
    })
  }

  marriage() {
    this.http.post<any>("http://localhost:3000/marriageRecord", this.marriageForm.value)
    .subscribe(async res=>{
      const alert = await this.alertController.create({
        header: 'Success!',
        message: 'Marriage Successfully Reserved!',
        buttons: ['OK'],
      });
      await alert.present()

      this.marriageForm.reset();
      this.router.navigate(['marriage']);
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
