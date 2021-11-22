import { Component } from '@angular/core';
import { Service } from '../app/services/AppServices';
import { Token, User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ProjetoAngular';
  tokenApi: string = '';

  constructor(public appService: Service) {}

  ngOnInit() {
    this.authLogin();
  }

  authLogin() {
    this.appService
      .authLogin()
      .toPromise()
      .then((res: Token) => {
        this.tokenApi = res.access_token;
        var e = this.appService
          .meusDados(this.tokenApi)
          .toPromise()
          .then((res: User) => {
            var dado = res;
          });
      });
  }
}
