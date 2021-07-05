import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Gerenciamento_membros{
  id:string;
  nome:string;
  username:string;
  aniversario:string;
  fone:string;
  nivel:string;
  password:string;
}

export interface Gerenciamento_membros1{
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
export class MembersManagementService {

  private url = 'http://127.0.0.1/php/api-gerenciamento/gerenciamento_membros';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<[Gerenciamento_membros]>(this.url);
  }

  remove(id: any){
    return this.http.delete(this.url + '/' + id)
  }

  update(gerenciamento_membros: Gerenciamento_membros1, id: any){
    return this.http.put(this.url + '/' + id, gerenciamento_membros);
  }

}
