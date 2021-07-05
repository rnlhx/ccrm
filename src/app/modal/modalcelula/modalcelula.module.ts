import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalcelulaPageRoutingModule } from './modalcelula-routing.module';

import { ModalcelulaPage } from './modalcelula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalcelulaPageRoutingModule
  ],
  declarations: [ModalcelulaPage]
})
export class ModalcelulaPageModule {}
