import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-thanksgiving',
  templateUrl: './thanksgiving.page.html',
  styleUrls: ['./thanksgiving.page.scss'],
})
export class ThanksgivingPage implements OnInit {

  public thanksgivingForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router, private alertController: AlertController) { }

  ngOnInit(): void {
    this.thanksgivingForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    })
  }

  thanksgiving() {
    this.http.post<any>("http://localhost:3000/thanksgivingRecord", this.thanksgivingForm.value)
    .subscribe(async res=>{
      const alert = await this.alertController.create({
        header: 'Success!',
        message: 'Thanksgiving Successfully Reserved!',
        buttons: ['OK'],
      });
      await alert.present()

      this.thanksgivingForm.reset();
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
