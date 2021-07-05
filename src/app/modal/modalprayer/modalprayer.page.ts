import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { PrayerRequestService } from 'src/app/service/prayer-request.service';

@Component({
  selector: 'app-modalprayer',
  templateUrl: './modalprayer.page.html',
  styleUrls: ['./modalprayer.page.scss'],
})
export class ModalprayerPage implements OnInit {

  constructor(private service: PrayerRequestService , private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  fecharModal(){
    this.modalCtrl.dismiss();
  }

  enviando(form: NgForm){
    const Prayer_request = form.value

      this.service.register(Prayer_request).subscribe(Response =>{
        this.modalCtrl.dismiss(Response); 
      })
    }
      
}

