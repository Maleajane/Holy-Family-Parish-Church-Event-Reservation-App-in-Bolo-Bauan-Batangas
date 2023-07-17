import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-adult-b',
  templateUrl: './adult-b.page.html',
  styleUrls: ['./adult-b.page.scss'],
})
export class AdultBPage implements OnInit {

  public adultBaptismForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router, private alertController: AlertController) { }

  ngOnInit(): void {
    this.adultBaptismForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      fathersFirstname: ['', Validators.required],
      fathersLastname: ['', Validators.required],
      mothersFirstname: ['', Validators.required],
      mothersLastname: ['', Validators.required],
      date: ['', Validators.required],
      godFathersFirstname: ['', Validators.required],
      godFathersLastname: ['', Validators.required],
      godMothersFirstname: ['', Validators.required],
      godMothersLastname: ['', Validators.required]
    })
  }

  adultBaptism() {
    this.http.post<any>("http://localhost:3000/adultBaptismRecord", this.adultBaptismForm.value)
    .subscribe(async res=>{
      const alert = await this.alertController.create({
        header: 'Success!',
        message: 'Adult Baptism Successfully Reserved!',
        buttons: ['OK'],
      });
      await alert.present()

      this.adultBaptismForm.reset();
      this.router.navigate(['baptism']);
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
