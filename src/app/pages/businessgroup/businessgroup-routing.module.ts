import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessgroupPage } from './businessgroup.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessgroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessgroupPageRoutingModule {}
