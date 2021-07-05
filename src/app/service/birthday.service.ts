import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Aniversario_mes{
  id:string;
  nome:string;
  username:string;
  aniversario:string;
  fone:string;
  email:string;
  nivel:string;
}

@Injectable({
  providedIn: 'root'
})
export class BirthdayService {

  private url = 'http://127.0.0.1/php/api-birthday/birthday';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<[Aniversario_mes]>(this.url);
  }
}
