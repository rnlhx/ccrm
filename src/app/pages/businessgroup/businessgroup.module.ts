import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessgroupPageRoutingModule } from './businessgroup-routing.module';

import { BusinessgroupPage } from './businessgroup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessgroupPageRoutingModule
  ],
  declarations: [BusinessgroupPage]
})
export class BusinessgroupPageModule {}
