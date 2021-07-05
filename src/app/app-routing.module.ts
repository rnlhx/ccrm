import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { PermissionGuard } from './guard/permission.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full',
  },
  {
    path: 'loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'agenda-pastoral',
    loadChildren: () => import('./pages/agenda-pastoral/agenda-pastoral.module').then( m => m.AgendaPastoralPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'members-management',
    loadChildren: () => import('./pages/members-management/members-management.module').then( m => m.MembersManagementPageModule),
    canActivate: [PermissionGuard]
  },
  {
    path: 'prayer-request',
    loadChildren: () => import('./pages/prayer-request/prayer-request.module').then( m => m.PrayerRequestPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'modalmembersmanagement',
    loadChildren: () => import('./modal/modalmembersmanagement/modalmembersmanagement.module').then( m => m.ModalmembersmanagementPageModule)
  },
  {
    path: 'modalprayer',
    loadChildren: () => import('./modal/modalprayer/modalprayer.module').then( m => m.ModalprayerPageModule)
  },
  {
    path: 'modalagenda',
    loadChildren: () => import('./modal/modalagenda/modalagenda.module').then( m => m.ModalagendaPageModule)
  },
  {
    path: 'businessgroup',
    loadChildren: () => import('./pages/businessgroup/businessgroup.module').then( m => m.BusinessgroupPageModule)
  },
  {
    path: 'businessgroup',
    loadChildren: () => import('./modal/modalbusiness/modalbusiness.module').then( m => m.ModalbusinessPageModule)
  },
  {
    path: 'celulas',
    loadChildren: () => import('./pages/celulas/celulas.module').then( m => m.CelulasPageModule)
  },
  {
    path: 'modalcelula',
    loadChildren: () => import('./modal/modalcelula/modalcelula.module').then( m => m.ModalcelulaPageModule)
  },
  {
    path: 'birthday',
    loadChildren: () => import('./pages/birthday/birthday.module').then( m => m.BirthdayPageModule),
    canActivate: [PermissionGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
