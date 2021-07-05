import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalmembersmanagementPageRoutingModule } from './modalmembersmanagement-routing.module';

import { ModalmembersmanagementPage } from './modalmembersmanagement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalmembersmanagementPageRoutingModule
  ],
  declarations: [ModalmembersmanagementPage]
})
export class ModalmembersmanagementPageModule {}
