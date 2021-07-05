import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembersManagementPageRoutingModule } from './members-management-routing.module';

import { MembersManagementPage } from './members-management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembersManagementPageRoutingModule
  ],
  declarations: [MembersManagementPage]
})
export class MembersManagementPageModule {}
