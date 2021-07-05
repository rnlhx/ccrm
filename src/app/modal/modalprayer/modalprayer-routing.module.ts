import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalprayerPage } from './modalprayer.page';

const routes: Routes = [
  {
    path: '',
    component: ModalprayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalprayerPageRoutingModule {}
