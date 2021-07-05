import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { ModalmembersmanagementPage } from 'src/app/modal/modalmembersmanagement/modalmembersmanagement.page';
import { Gerenciamento_membros, MembersManagementService } from 'src/app/service/members-management.service';
import { UserRegisterService, User_register } from 'src/app/service/user-register.service';

@Component({
  selector: 'app-members-management',
  templateUrl: './members-management.page.html',
  styleUrls: ['./members-management.page.scss'],
})
export class MembersManagementPage implements OnInit {

  gerenciamento_membros: Gerenciamento_membros[];

  constructor(private service: MembersManagementService ,private modalCtrl: ModalController, private toastCtrl: ToastController, private alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {
    this.service.getAll().subscribe(Response =>{
      this.gerenciamento_membros = Response;
    })
  }

    remover(id: any){
      this.alertCtrl.create({
          header: 'Deletar',
          message: 'Você tem certeza ?',
          buttons: [{
            text: 'Sim',
            handler: () => {
              this.service.remove(id).subscribe(() =>{
                //this.gerenciamento_membros = this.gerenciamento_membros.filter(idgerenciamento_membros => idgerenciamento_membros.id !== id);
                this.service.getAll().subscribe(Response =>{
                  this.gerenciamento_membros = Response;
                })});
            }
          },
          {text : 'Não'}
          ]
        }).then(alertEl => alertEl.present());
      }

   novoMembro(){
    this.modalCtrl.create({
      component: ModalmembersmanagementPage
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(({data}) => {
      this.service.getAll().subscribe(Response =>{
        this.gerenciamento_membros = Response;
      });
      this.toastCtrl.create({
        message: 'Membro Cadastrado com Sucesso',
        duration: 2000
      }).then(toast =>{
        toast.present();
      })
    })
    }

    atualizar(c: Gerenciamento_membros){
      this.modalCtrl.create({
        component: ModalmembersmanagementPage,
        componentProps: {c}
      }).then(modal => {
        modal.present();
        return modal.onDidDismiss();
      }).then(({data}) => {
        this.service.getAll().subscribe(Response =>{
          this.gerenciamento_membros = Response;
        });
        this.toastCtrl.create({
          message: 'Membro Atualizado com Sucesso',
          duration: 2000
        }).then(toast =>{
          toast.present();
        })
      })
      }

      birthday() {
        this.router.navigate(['birthday'])
      }
    
}
