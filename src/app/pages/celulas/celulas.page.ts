import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { ModalcelulaPage } from 'src/app/modal/modalcelula/modalcelula.page';
import { Celula, CelulaService } from 'src/app/service/celula.service';

@Component({
  selector: 'app-celulas',
  templateUrl: './celulas.page.html',
  styleUrls: ['./celulas.page.scss'],
})
export class CelulasPage implements OnInit {

  celula: Celula[];

  constructor (private service: CelulaService, private toastCtrl: ToastController, private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.service.getAll().subscribe(Response =>{
      this.celula = Response;
    })
  }

  novaCelula(){
      this.modalCtrl.create({
        component: ModalcelulaPage
      }).then(modal => {
        modal.present();
        return modal.onDidDismiss();
      }).then(({data}) => {
        this.service.getAll().subscribe(Response =>{
          this.celula = Response;
        });
        this.toastCtrl.create({
          message: 'Nova Célula Adicionada',
          duration: 2000
        }).then(toast =>{
          toast.present();
        })
      })
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
                this.celula = Response;
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
        message: 'Apenas pessoas autorizados podem alterar as células',
        buttons: [{
          text : 'Ok'}],
          cssClass: 'custom-alert',
      }).then(alertEl => alertEl.present());
    }
  }

}
