import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { DisciplinasService } from '../shared/services/disciplinas.service';

@Component({
  selector: 'app-disciplinas',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent],
  templateUrl: './disciplinas.component.html',
  styleUrl: './disciplinas.component.css'
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
