import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mfts',
  templateUrl: './mfts.page.html',
  styleUrls: ['./mfts.page.scss'],
})
export class MftsPage implements OnInit {

  public massForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router, private alertController: AlertController) { }

  ngOnInit(): void {
    this.massForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    })
  }

  mass() {
    this.http.post<any>("http://localhost:3000/mftsRecord", this.massForm.value)
    .subscribe(async res=>{
      const alert = await this.alertController.create({
        header: 'Success!',
        message: 'Mass for the Soul Successfully Reserved!',
        buttons: ['OK'],
      });
      await alert.present()

      this.massForm.reset();
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
