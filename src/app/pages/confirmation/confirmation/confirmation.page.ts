import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {

  public confirmationForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router, private alertController: AlertController) { }

  ngOnInit(): void {
    this.confirmationForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      date: ['', Validators.required],
      godFathersFirstname: ['', Validators.required],
      godFathersLastname: ['', Validators.required],
      godMothersFirstname: ['', Validators.required],
      godMothersLastname: ['', Validators.required]
    })
  }

  confirmation() {
    this.http.post<any>("http://localhost:3000/confirmationRecord", this.confirmationForm.value)
    .subscribe(async res=>{
      const alert = await this.alertController.create({
        header: 'Success!',
        message: 'Confirmation Successfully Reserved!',
        buttons: ['OK'],
      });
      await alert.present()

      this.confirmationForm.reset();
      this.router.navigate(['confirmation']);
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
