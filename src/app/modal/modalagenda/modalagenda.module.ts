import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalagendaPageRoutingModule } from './modalagenda-routing.module';

import { ModalagendaPage } from './modalagenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalagendaPageRoutingModule
  ],
  declarations: [ModalagendaPage]
})
export class ModalagendaPageModule {}
