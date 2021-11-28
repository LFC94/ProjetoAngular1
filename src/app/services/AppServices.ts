import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User, Token } from '../models/User';

@Injectable({ providedIn: 'root' })
export class Service {
  private readonly urlApi = environment['urlApi'];
  constructor(private httpClient: HttpClient) {}

  public authLogin(email: string, senha: string) {
    var url = this.urlApi + 'auth/login';
    var usuario = {
      email: email,
      password: senha,
    };
    return this.httpClient.post<Token>(url, usuario, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers':
          'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
      }),
    });
  }

  public meusDados(tokenUsuario: any) {
    var url = this.urlApi + 'auth/me';
    return this.httpClient.post<User>(url, null, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenUsuario}`,
      }),
    });
  }

  public authCreate(usuario: any, tokenUsuario: any) {
    var url = this.urlApi + 'auth/create';
    return this.httpClient.post<User>(url, usuario, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenUsuario}`,
      }),
    });
  }
}
