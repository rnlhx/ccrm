import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {
  
  constructor(private router: Router, private alertCtrl: AlertController) {}

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const user = JSON.parse(window.sessionStorage.getItem('user'));
    if (user.nivel == 'admin') {
      return true;
    }
    else {
      this.alertCtrl.create({
        header: 'Acesso restrito',
        message: 'Apenas Administradores autorizados, para maiores informações consulte o Administrador de sua igreja',
        buttons: [{
          text : 'Ok'}],
          cssClass: 'custom-alert',
      }).then(alertEl => alertEl.present());
    }
    }
  }
