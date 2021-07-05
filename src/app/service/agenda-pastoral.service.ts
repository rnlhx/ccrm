import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Agenda_pastoral{
  id:string;
  data:string;
  time:string;
  tarefa:string;
}

@Injectable({
  providedIn: 'root'
})
export class AgendaPastoralService {

  private url = 'http://127.0.0.1/php/api-agenda/agenda_pastoral';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<[Agenda_pastoral]>(this.url);
  }

  register(agenda_pastoral: Agenda_pastoral) {
    return this.http.post(`${this.url}`, agenda_pastoral);
  }

remove(id: any){
    return this.http.delete(this.url + '/' + id)
  }
}
