import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { BusinessgroupService } from 'src/app/service/businessgroup.service';

@Component({
  selector: 'app-modalbusiness',
  templateUrl: './modalbusiness.page.html',
  styleUrls: ['./modalbusiness.page.scss'],
})
export class ModalbusinessPage implements OnInit {

  constructor(private service: BusinessgroupService, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  fecharModal(){
    this.modalCtrl.dismiss();
  }

  enviando(form: NgForm){
    const Business_group = form.value

      this.service.register(Business_group).subscribe(Response =>{
        this.modalCtrl.dismiss(Response); 
      })
    }
  }
