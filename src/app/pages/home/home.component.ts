import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { DisciplinasService } from '../../shared/services/disciplinas.service';
import { HeaderComponent } from '../../shared/header/header.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, HeaderComponent, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  aluno = "João Silveira";

  constructor(private disciplinasService: DisciplinasService) {
  }

  //Usando service CARD06
  disciplinas = this.disciplinasService.getDisciplinasCursoSemestre({ nome: 'Matemática', semestre: '1' });




  atividades = [
    'atividade01', 'atividade02', 'atividade03', 'atividade04'
  ];

  extras = [
    'Língua Estrangeira', 'Programação - JAVA', 'Seminário' 
  ];

}
