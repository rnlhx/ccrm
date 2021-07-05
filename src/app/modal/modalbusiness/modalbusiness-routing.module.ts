import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalbusinessPage } from './modalbusiness.page';

const routes: Routes = [
  {
    path: '',
    component: ModalbusinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalbusinessPageRoutingModule {}
