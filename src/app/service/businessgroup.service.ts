import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Business_group{
  id:string;
  nome_completo:string;
  procuro:string;
  fone:string;
  descricao:string;
  datetime:string;
}

@Injectable({
  providedIn: 'root'
})
export class BusinessgroupService {

  private url = 'http://127.0.0.1/php/api-business/business_group';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<[Business_group]>(this.url);
  }

  register(business_group: Business_group) {
    return this.http.post(`${this.url}`, business_group);
  }

remove(id: any){
    return this.http.delete(this.url + '/' + id)
  }

}
