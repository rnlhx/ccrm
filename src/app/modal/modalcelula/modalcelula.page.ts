import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { CelulaService } from 'src/app/service/celula.service';

@Component({
  selector: 'app-modalcelula',
  templateUrl: './modalcelula.page.html',
  styleUrls: ['./modalcelula.page.scss'],
})
export class ModalcelulaPage implements OnInit {

  constructor(private modalCtrl: ModalController, private service: CelulaService) { }

  ngOnInit() {
  }

  fecharModal(){
    this.modalCtrl.dismiss();
  }

  enviando(form: NgForm){
    const Celula = form.value

      this.service.register(Celula).subscribe(Response =>{
        this.modalCtrl.dismiss(Response); 
      })
    }

}
