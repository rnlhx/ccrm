import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaPastoralPage } from './agenda-pastoral.page';

const routes: Routes = [
  {
    path: '',
    component: AgendaPastoralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendaPastoralPageRoutingModule {}
