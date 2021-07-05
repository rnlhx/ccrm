import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersManagementPage } from './members-management.page';

const routes: Routes = [
  {
    path: '',
    component: MembersManagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembersManagementPageRoutingModule {}
