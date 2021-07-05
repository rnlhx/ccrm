import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MembersManagementPageRoutingModule } from '../members-management/members-management-routing.module';

export interface User1{
  nome:string;
  username:string;
  email:string;
  nivel:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  dados_membros: User1[];

  dadosparse_membros = JSON.parse(window.sessionStorage.getItem('user'));

  constructor(private router: Router, private http: HttpClient, private alertCtrl: AlertController) { }

  ngOnInit() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token
    });

    this.http.post(`http://127.0.0.1/php/authapp/api/home`, 'body', { headers }).subscribe((Response: User1[]) =>{
      this.dados_membros = Response;
      sessionStorage.setItem("user", JSON.stringify(this.dados_membros));
    }); 

}

  agenda_pastoral() {
      this.router.navigate(['agenda-pastoral']);
  }

  members_management() {
    this.router.navigate(['members-management'])
  }

  prayer_request() {
    this.router.navigate(['prayer-request'])
  }

  business_group() {
    this.router.navigate(['businessgroup'])
  }

  celulas() {
    this.router.navigate(['celulas'])
  }

  financial_management() {
    this.alertCtrl.create({
      header: 'Em breve',
      message: 'Função estará disponível em breve, nas próximas atualizações',
      buttons: [{
        text : 'Ok'}],
        cssClass: 'custom-alert',
    }).then(alertEl => alertEl.present())
  }

  /* logout() {
    this.router.navigateByUrl('login', { replaceUrl:true }); */

  logout() {
    window.sessionStorage.clear();
    this.router.navigateByUrl('login', { replaceUrl:true });
    };

}
