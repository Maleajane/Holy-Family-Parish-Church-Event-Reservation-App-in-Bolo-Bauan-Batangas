import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-petition',
  templateUrl: './petition.page.html',
  styleUrls: ['./petition.page.scss'],
})
export class PetitionPage implements OnInit {

  public petitionForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router, private alertController: AlertController) { }

  ngOnInit(): void {
    this.petitionForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    })
  }

  petition() {
    this.http.post<any>("http://localhost:3000/petitionRecord", this.petitionForm.value)
    .subscribe(async res=>{
      const alert = await this.alertController.create({
        header: 'Success!',
        message: 'Petition Successfully Reserved!',
        buttons: ['OK'],
      });
      await alert.present()

      this.petitionForm.reset();
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
