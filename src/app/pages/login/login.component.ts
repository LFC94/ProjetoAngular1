import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Token, User } from 'src/app/models/User';
import { Service } from 'src/app/services/AppServices';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  mensagemErro?: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private appService: Service
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
  submitLogin() {
    this.mensagemErro = '';

    var dadosLogin = this.loginForm?.getRawValue() as User;
    this.appService
      .authLogin(dadosLogin.email, dadosLogin.password)
      .toPromise()
      .then((res: Token) => {
        this.tokenApi = res.access_token;
      })
      .catch((erro) => {
        console.log(erro);
        this.mensagemErro = 'Acesso invalido';
      });
  }
}
