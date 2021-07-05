import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AgendaPastoralService } from 'src/app/service/agenda-pastoral.service';

@Component({
  selector: 'app-modalagenda',
  templateUrl: './modalagenda.page.html',
  styleUrls: ['./modalagenda.page.scss'],
})
export class ModalagendaPage implements OnInit {

  constructor(private modalCtrl: ModalController, private service: AgendaPastoralService) { }

  ngOnInit() {
  }

  fecharModal(){
    this.modalCtrl.dismiss();
  }

  enviando(form: NgForm){
    const Agenda_pastoral = form.value

      this.service.register(Agenda_pastoral).subscribe(Response =>{
        this.modalCtrl.dismiss(Response); 
      })
    }

}
