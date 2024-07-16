import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { DisciplinasService } from '../../shared/services/disciplinas.service';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-disciplinas',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent],
  templateUrl: './disciplinas.component.html',
  styleUrl: './disciplinas.component.scss'
})
export class DisciplinasComponent {

  constructor(private disciplinasService: DisciplinasService) {
  }

  alumni = 'João Silveira';

  disciplinasMatemática1 = this.disciplinasService.getDisciplinasCursoSemestre({nome: 'Matemática', semestre: '1'});
  disciplinasMatemática2 = this.disciplinasService.getDisciplinasCursoSemestre({nome: 'Matemática', semestre: '2'});
  
  semestres = [
    {
      curso: 'Matemática',
      semestre: '2024/1',
      disciplinas: this.disciplinasMatemática1
    },
    {
      curso: 'Matemática',
      semestre: '2024/2',
      disciplinas: this.disciplinasMatemática2
    }
  ];


}
