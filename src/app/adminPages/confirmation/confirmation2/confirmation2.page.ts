import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FetchJsonDataService } from 'src/app/fetch-json-data.service';

@Component({
  selector: 'app-confirmation2',
  templateUrl: './confirmation2.page.html',
  styleUrls: ['./confirmation2.page.scss'],
})
export class Confirmation2Page implements OnInit {

  data:Array<any> = [];

  constructor(
    private fetchjsondata: FetchJsonDataService, public alertController: AlertController
  ) {
    this.fetchjsondata.getConfirmation().subscribe(
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
            this.fetchjsondata.deleteConfirmation(val).subscribe(data =>{
            });
            this.fetchjsondata.getConfirmation().subscribe((res) => {
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
