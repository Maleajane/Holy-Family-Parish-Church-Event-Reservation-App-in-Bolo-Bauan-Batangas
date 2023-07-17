import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FetchJsonDataService } from 'src/app/fetch-json-data.service';

@Component({
  selector: 'app-funeral',
  templateUrl: './funeral.page.html',
  styleUrls: ['./funeral.page.scss'],
})
export class FuneralPage implements OnInit {

  data:Array<any> = [];

  constructor(
    private fetchjsondata: FetchJsonDataService, public alertController: AlertController
  ) {
    this.fetchjsondata.getFuneral().subscribe(
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
            this.fetchjsondata.deleteFuneral(val).subscribe(data =>{
            });
            this.fetchjsondata.getFuneral().subscribe((res) => {
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
