import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalbusinessPageRoutingModule } from './modalbusiness-routing.module';

import { ModalbusinessPage } from './modalbusiness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalbusinessPageRoutingModule
  ],
  declarations: [ModalbusinessPage]
})
export class ModalbusinessPageModule {}
