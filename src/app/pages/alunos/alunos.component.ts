import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AlunosService } from '../../shared/services/alunos.service';
import { HeaderComponent } from '../../shared/header/header.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';

interface DadosAluno {
  nome: string,
  cpf: string,
  email: string,
  celular: string,
  curso: string,
  selecionado: boolean
}

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [CommonModule, RouterModule,
     HeaderComponent, SidebarComponent],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})


export class AlunosComponent {
  dadosAluno: DadosAluno[] = this.alunoService.getAlunos();
  campoBusca: string = '';

  constructor(private router: Router, private alunoService: AlunosService) {
  }

  buscar() {
    //console.log(this.dadosAluno)
  //   if (this.campoBusca) {
  //     this.filteredStudents = this.students.filter(student =>
  //       student.fullName.toLowerCase().includes(this.campoBusca.toLowerCase()) ||
  //       student.email.toLowerCase().includes(this.campoBusca.toLowerCase())
  //     );
  //   } else {
  //     this.filteredStudents = [...this.students];
  //   }
  }

  excluir(aluno: any) {
    let confirmacao = confirm("Deseja mesmo excluir esse usuário?");
    if (confirmacao) {
      if(this.alunoService.excluirAluno(aluno)) {
        this.router.navigate(['/alunos']);
      };
    }
  }

  editar(aluno: any) {
    this.router.navigate(['/cadastroAlunos'], { state: {aluno} });
  }
}
