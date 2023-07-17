import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-first-holy-communion',
  templateUrl: './first-holy-communion.page.html',
  styleUrls: ['./first-holy-communion.page.scss'],
})
export class FirstHolyCommunionPage implements OnInit {

  public eucharistForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router, private alertController: AlertController) { }

  ngOnInit(): void {
    this.eucharistForm = this.formBuilder.group({
      organization: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      date: ['', Validators.required],
    })
  }

  eucharist() {
    this.http.post<any>("http://localhost:3000/eucharistRecord", this.eucharistForm.value)
    .subscribe(async res=>{
      const alert = await this.alertController.create({
        header: 'Success!',
        message: 'Eucharist Successfully Reserved!',
        buttons: ['OK'],
      });
      await alert.present()

      this.eucharistForm.reset();
      this.router.navigate(['eucharist']);
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
