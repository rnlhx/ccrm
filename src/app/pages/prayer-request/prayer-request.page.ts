import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ModalprayerPage } from 'src/app/modal/modalprayer/modalprayer.page';
import { PrayerRequestService, Prayer_request } from 'src/app/service/prayer-request.service';

@Component({
  selector: 'app-prayer-request',
  templateUrl: './prayer-request.page.html',
  styleUrls: ['./prayer-request.page.scss'],
})
export class PrayerRequestPage implements OnInit {

  prayer_request: Prayer_request[];

  constructor(private service: PrayerRequestService, private modalCtrl: ModalController, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.service.getAll().subscribe(Response =>{
      this.prayer_request = Response;
    })
  }

  novoPedido(){
    this.modalCtrl.create({
      component: ModalprayerPage
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(({data}) => {
      this.service.getAll().subscribe(Response =>{
        this.prayer_request = Response;
      });
      this.toastCtrl.create({
        message: 'Pedido Solicitado',
        duration: 2000
      }).then(toast =>{
        toast.present();
      })
    })
    }

}
