import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendaPastoralPageRoutingModule } from './agenda-pastoral-routing.module';

import { AgendaPastoralPage } from './agenda-pastoral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendaPastoralPageRoutingModule
  ],
  declarations: [AgendaPastoralPage]
})
export class AgendaPastoralPageModule {}
