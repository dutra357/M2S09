import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../../app/shared/services/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  usuarioLogado!: {email: string, senha: string}

  constructor(private router: Router, private loginService: LoginService) { 
    this.usuarioLogado = this.loginService.usuarioLogado;
  }


  sair() {
    let confirmacao = confirm("Deseja realmente sair?");
    if (confirmacao) {
      this.loginService.logout();
      this.router.navigate(["login"]);
    }
  }

  path = 'https://img.icons8.com/?size=100&id=42763&format=png&color=000000'
  usuario = 'Joao Silveira'

}
