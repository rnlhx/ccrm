import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import {Gerenciamento_membros1, MembersManagementService } from 'src/app/service/members-management.service';
import { UserRegisterService, User_register } from 'src/app/service/user-register.service';


@Component({
  selector: 'app-modalmembersmanagement',
  templateUrl: './modalmembersmanagement.page.html',
  styleUrls: ['./modalmembersmanagement.page.scss'],
})
export class ModalmembersmanagementPage implements OnInit {
@Input() c: Gerenciamento_membros1;
atualizar = false;
dados = {
  nome: '',
  username: '',
  aniversario: '',
  fone: '',
  email: '',
  nivel: ''
}

  constructor(private modalCtrl: ModalController, private service: UserRegisterService, private service1: MembersManagementService) { }

  ngOnInit() {
    if(this.c){
      this.atualizar = true;
      this.dados = this.c;
    }
  }

  fecharModal(){
    this.modalCtrl.dismiss();
  }

  enviando(form: NgForm){
    const user_register = form.value
    const gerenciamento_membros = form.value
    if(this.atualizar){
      this.service1.update(gerenciamento_membros, this.c.id).subscribe(Response =>{
        this.modalCtrl.dismiss(Response);
      })
    }else{
      this.service.register(user_register).subscribe(Response =>{
        this.modalCtrl.dismiss(Response); 
      })
    }
      
    }

}
