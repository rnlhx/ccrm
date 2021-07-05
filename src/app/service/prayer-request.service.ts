import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Prayer_request{
  id:string;
  nome_pessoa:string;
  descricao:string;
  create_date:string;
}

@Injectable({
  providedIn: 'root'
})
export class PrayerRequestService {

  private url = 'http://127.0.0.1/php/api-prayer/prayer_request';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<[Prayer_request]>(this.url);
  }

  register(prayer_request: Prayer_request) {
    return this.http.post(`${this.url}`, prayer_request);
  }
}
