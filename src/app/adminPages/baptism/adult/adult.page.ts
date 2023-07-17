import { Component, OnInit } from '@angular/core';
import { FetchJsonDataService } from 'src/app/fetch-json-data.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-adult',
  templateUrl: './adult.page.html',
  styleUrls: ['./adult.page.scss'],
})
export class AdultPage implements OnInit {

  data:Array<any> = [];

  constructor(
    private fetchjsondata: FetchJsonDataService, public alertController: AlertController
  ) {
    this.fetchjsondata.getAdult().subscribe(
      (res)=>{
        console.log(res)
        this.data = res;
      }
    )
  }


  deleteRow(val) {
    this.alertController.create({
      header: 'Approve As Done?',
      subHeader: 'Are you sure?',
      message: 'Once approve, this record will be mark as done and remove!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.fetchjsondata.deleteAdult(val).subscribe(data =>{
            });
            this.fetchjsondata.getAdult().subscribe((res) => {
              this.data = res;
            });
          },
        }
      ]
    }).then(res => {
      res.present();
    });
  }

  ngOnInit() {
  }

}
