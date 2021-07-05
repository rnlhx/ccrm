import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalprayerPageRoutingModule } from './modalprayer-routing.module';

import { ModalprayerPage } from './modalprayer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalprayerPageRoutingModule
  ],
  declarations: [ModalprayerPage]
})
export class ModalprayerPageModule {}
