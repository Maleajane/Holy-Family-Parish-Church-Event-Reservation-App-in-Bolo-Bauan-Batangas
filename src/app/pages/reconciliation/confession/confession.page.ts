import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-confession',
  templateUrl: './confession.page.html',
  styleUrls: ['./confession.page.scss'],
})
export class ConfessionPage implements OnInit {

  public reconciliationForm !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router, private alertController: AlertController) { }

  ngOnInit(): void {
    this.reconciliationForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      date: ['', Validators.required],
    })
  }

  reconciliation() {
    this.http.post<any>("http://localhost:3000/reconciliationRecord", this.reconciliationForm.value)
    .subscribe(async res=>{
      const alert = await this.alertController.create({
        header: 'Success!',
        message: 'Reconciliation Successfully Reserved!',
        buttons: ['OK'],
      });
      await alert.present()

      this.reconciliationForm.reset();
      this.router.navigate(['reconciliation']);
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
