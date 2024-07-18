import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, MatFormFieldModule,
     MatInputModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private loginService: LoginService) { }

  login = {
    email: "",
    senha: ""
  };

  entrar() {
    if (this.login.email && this.login.senha) {
      if(this.loginService.login(this.login)) {
        window.location.href = "/home";
      } else {
        alert('Erro ao logar!')
      }

    } else {
      alert('Campos em branco!');
    }
  }

  sair() {
    let verify = confirm('Tem certeza que deseja sair?')
    if (verify) {
      this.loginService.logout();
    }
  }

  recuperarSenha() {
    alert('Processo de recuperação de senha enviado para o e-mail cadastrado');
  }

}
