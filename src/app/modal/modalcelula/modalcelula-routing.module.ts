import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalcelulaPage } from './modalcelula.page';

const routes: Routes = [
  {
    path: '',
    component: ModalcelulaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalcelulaPageRoutingModule {}
