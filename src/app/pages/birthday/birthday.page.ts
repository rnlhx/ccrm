import { Component, OnInit } from '@angular/core';
import { Aniversario_mes, BirthdayService } from 'src/app/service/birthday.service';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.page.html',
  styleUrls: ['./birthday.page.scss'],
})
export class BirthdayPage implements OnInit {

  aniversario_mes: Aniversario_mes[];

  constructor(private service: BirthdayService) { }

  ngOnInit() {
    this.service.getAll().subscribe(Response =>{
      this.aniversario_mes = Response;
    })
  }

}
