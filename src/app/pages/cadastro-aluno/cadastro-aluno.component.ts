import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { AlunosService } from '../../shared/services/alunos.service';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-cadastro-aluno',
  standalone: true,
  imports: [FormsModule, RouterLink, HeaderComponent, SidebarComponent],
  templateUrl: './cadastro-aluno.component.html',
  styleUrl: './cadastro-aluno.component.scss'
})
export class CadastroAlunoComponent {

  cadastro = {
    nome: "",
    cpf: "",
    email: "",
    celular: "",
    curso: ""
  };
  
  constructor(private router: Router, private alunosService: AlunosService){
    let temp = this.router.getCurrentNavigation()?.extras.state;
    
    if(temp){
      this.cadastro.nome = temp?.['aluno'].nome;
      this.cadastro.cpf = temp?.['aluno'].cpf;
      this.cadastro.email = temp?.['aluno'].email;
      this.cadastro.celular = temp?.['aluno'].celular;
      this.cadastro.curso = temp?.['aluno'].curso;
    }
  }
 
  salvar() {
    if (this.cadastro.nome && this.cadastro.cpf
      && this.cadastro.email && this.cadastro.celular
      && this.cadastro.curso) {

        //localStorage.setItem("novoAluno", JSON.stringify(this.cadastro))

        this.alunosService.cadastrarAluno(this.cadastro);
        
        this.router.navigate(["alunos"]);
    } else {
      alert('Campos incompletos.');
    }
  }
}
