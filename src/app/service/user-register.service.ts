import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User_register{
  id:string;
  nome:string;
  username:string;
  email:string;
  nivel:string;
  password:string;
}

@Injectable({
  providedIn: 'root',
})
export class UserRegisterService {
  private url = 'http://127.0.0.1/php/authapp/api';
  constructor(private http: HttpClient) { }

  register(user_register: User_register) {
    return this.http.post(`${this.url}/register`, user_register);
  }
  
}
