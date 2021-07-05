import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalmembersmanagementPage } from './modalmembersmanagement.page';

const routes: Routes = [
  {
    path: '',
    component: ModalmembersmanagementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalmembersmanagementPageRoutingModule {}
