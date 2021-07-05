import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Celula{
  id:string;
  local:string;
  data:string;
  time:string;
}

@Injectable({
  providedIn: 'root'
})
export class CelulaService {

  
  private url = 'http://127.0.0.1/php/api-celulas/celulas';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<[Celula]>(this.url);
  }

  register(celula: Celula) {
    return this.http.post(`${this.url}`, celula);
  }

remove(id: any){
    return this.http.delete(this.url + '/' + id)
  }
}
