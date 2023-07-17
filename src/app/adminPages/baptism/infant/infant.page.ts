import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FetchJsonDataService } from 'src/app/fetch-json-data.service';

@Component({
  selector: 'app-infant',
  templateUrl: './infant.page.html',
  styleUrls: ['./infant.page.scss'],
})
export class InfantPage implements OnInit {

  data:Array<any> = [];

  constructor(
    private fetchjsondata: FetchJsonDataService, public alertController: AlertController
  ) {
    this.fetchjsondata.getInfant().subscribe(
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
            this.fetchjsondata.deleteInfant(val).subscribe(data =>{
            });
            this.fetchjsondata.getInfant().subscribe((res) => {
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
