import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  textoPesquisa: string | undefined;
  listagemUsuariosPesquisa: Array<{nome: string, img: string, rota: string}> = []

  constructor(public activatedRoute : ActivatedRoute) {}

  ngOnInit(): void {
    this.listagemUsuariosPesquisa = this.listagemUsuarios;

    // let id = this.activatedRoute.snapshot.params['id']; //aula1
  }

  pesquisar() {
    if (this.textoPesquisa) {
      this.listagemUsuariosPesquisa = this.listagemUsuarios.filter(usuario => this.usuario.nome.toUpperCase()
    .includes(this.textoPesquisa!.toUpperCase()));
    } else {
      this.listagemUsuariosPesquisa = this.listagemUsuarios;

    }
  }
  
  usuario = {
    nome: '',
    img: '',
    rota: ''
  }

  listagemUsuarios = [
    {
      nome: 'José',
      img: '',
      rota: ''
    },
    {
      nome: 'Maria',
      img: '',
      rota: ''
    },
    {
      nome: 'Laura',
      img: '',
      rota: ''
    }
  ];
}
