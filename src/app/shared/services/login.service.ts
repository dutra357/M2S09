import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuarioLogado!: {email: string, senha: string}

  constructor() { }

  login(usuario: {email: string, senha: string}): boolean {
      for(let usr of this.usuarios) {
        if((usr.email === usuario.email) && (usr.senha === usuario.senha)) {
          sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario));
          alert('Usuário logado com sucesso!')
          return true;
        }
      }
      return false;
  }

  logout() {
    sessionStorage.removeItem('usuarioLogado')
  }


  usuarios = [
    {
      email: 'jose@gmail.com',
      senha: 'jose',
      adm: 'false'
    },
    {
      email: 'adm',
      senha: 'adm',
      adm: 'true'
    }
  ]
}
