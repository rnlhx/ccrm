import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { ModalagendaPage } from 'src/app/modal/modalagenda/modalagenda.page';
import { AgendaPastoralService, Agenda_pastoral } from 'src/app/service/agenda-pastoral.service';

@Component({
  selector: 'app-agenda-pastoral',
  templateUrl: './agenda-pastoral.page.html',
  styleUrls: ['./agenda-pastoral.page.scss'],
})
export class AgendaPastoralPage implements OnInit {

  agenda_pastoral: Agenda_pastoral[];

  constructor(private service: AgendaPastoralService, private modalCtrl: ModalController, private toastCtrl: ToastController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.service.getAll().subscribe(Response =>{
      this.agenda_pastoral = Response;
    })
  }

  novaTarefa(){
    const user = JSON.parse(window.sessionStorage.getItem('user'));
    if (user.nivel == 'admin') {
      this.modalCtrl.create({
        component: ModalagendaPage
      }).then(modal => {
        modal.present();
        return modal.onDidDismiss();
      }).then(({data}) => {
        this.service.getAll().subscribe(Response =>{
          this.agenda_pastoral = Response;
        });
        this.toastCtrl.create({
          message: 'Agendamento Realizado',
          duration: 2000
        }).then(toast =>{
          toast.present();
        })
      })
    }
    else {
      this.alertCtrl.create({
        header: 'Acesso restrito',
        message: 'Apenas pessoas autorizados podem adicionar eventos na agenda pastoral',
        buttons: [{
          text : 'Ok'}],
          cssClass: 'custom-alert',
      }).then(alertEl => alertEl.present());
    }
  }

  remover(id: any){
    const user = JSON.parse(window.sessionStorage.getItem('user'));
    if (user.nivel == 'admin') {
      this.alertCtrl.create({
        header: 'Deletar',
        message: 'Você tem certeza ?',
        buttons: [{
          text: 'Sim',
          handler: () => {
            this.service.remove(id).subscribe(() =>{
              //this.gerenciamento_membros = this.gerenciamento_membros.filter(idgerenciamento_membros => idgerenciamento_membros.id !== id);
              this.service.getAll().subscribe(Response =>{
                this.agenda_pastoral = Response;
              })});
          }
        },
        {text : 'Não'}
        ]
      }).then(alertEl => alertEl.present());
    }
    else {
      this.alertCtrl.create({
        header: 'Acesso restrito',
        message: 'Apenas pessoas autorizados podem deletar eventos na agenda pastoral',
        buttons: [{
          text : 'Ok'}],
          cssClass: 'custom-alert',
      }).then(alertEl => alertEl.present());
    }
  }
}
