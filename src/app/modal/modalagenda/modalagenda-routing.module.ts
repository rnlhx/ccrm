import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalagendaPage } from './modalagenda.page';

const routes: Routes = [
  {
    path: '',
    component: ModalagendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalagendaPageRoutingModule {}
