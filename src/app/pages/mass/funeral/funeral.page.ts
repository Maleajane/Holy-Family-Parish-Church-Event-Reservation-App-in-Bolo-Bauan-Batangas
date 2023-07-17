import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-funeral',
  templateUrl: './funeral.page.html',
  styleUrls: ['./funeral.page.scss'],
})
export class FuneralPage implements OnInit {

  public funeralForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router, private alertController: AlertController) { }

  ngOnInit(): void {
    this.funeralForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      death: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      serviceAddress: ['', Validators.required],
      fullname: ['', Validators.required],
      relationship: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required]
    })
  }

  funeral() {
    this.http.post<any>("http://localhost:3000/funeralRecord", this.funeralForm.value)
    .subscribe(async res=>{
      const alert = await this.alertController.create({
        header: 'Success!',
        message: 'Funeral Successfully Reserved!',
        buttons: ['OK'],
      });
      await alert.present()

      this.funeralForm.reset();
      this.router.navigate(['mass']);
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
