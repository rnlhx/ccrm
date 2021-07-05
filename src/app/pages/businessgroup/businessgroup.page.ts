import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { ModalbusinessPage } from 'src/app/modal/modalbusiness/modalbusiness.page';
import { BusinessgroupService, Business_group } from 'src/app/service/businessgroup.service';

@Component({
  selector: 'app-businessgroup',
  templateUrl: './businessgroup.page.html',
  styleUrls: ['./businessgroup.page.scss'],
})
export class BusinessgroupPage implements OnInit {

  business_group: Business_group[];

  constructor (private service: BusinessgroupService, private toastCtrl: ToastController, private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.service.getAll().subscribe(Response =>{
      this.business_group = Response;
    })
  }

  novaProcura(){
      this.modalCtrl.create({
        component: ModalbusinessPage
      }).then(modal => {
        modal.present();
        return modal.onDidDismiss();
      }).then(({data}) => {
        this.service.getAll().subscribe(Response =>{
          this.business_group = Response;
        });
        this.toastCtrl.create({
          message: 'Oferta/Procura Realizada',
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
                this.business_group = Response;
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
        message: 'Apenas pessoas autorizados podem deletar ofertas ou procuras',
        buttons: [{
          text : 'Ok'}],
          cssClass: 'custom-alert',
      }).then(alertEl => alertEl.present());
    }
  }

}
