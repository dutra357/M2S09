import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {

  constructor() { }

  getDisciplinasCurso(curso: { nome: string }): any {
    let todasDisciplinas = [];
    for (let entity of this.disciplinas) {
      if ((entity.nome === curso.nome)) {
        for (let disciplina of entity.disciplinas) {
          todasDisciplinas.push(disciplina);
        }
        return todasDisciplinas;
      }
    }
    return null;
  }


  getDisciplinasCursoSemestre(curso: { nome: string, semestre: string }): any {
    for (let entity of this.disciplinas) {
      if ((entity.nome === curso.nome) && (entity.semestre === curso.semestre)) {
        return entity.disciplinas;
      }
    }
    return null;
  }

  disciplinas = [
    {
      nome: 'Matemática',
      semestre:'1',
      disciplinas: ['Cálculo A', 'Física I', 'Álgebra', 'Geometria Plan.']
    },
    {
      nome: 'Matemática',
      semestre:'2',
      disciplinas: ['Cálculo B', 'Física II', 'Geometria Analit.']
    },
    {
      nome: 'Português',
      semestre:'1',
      disciplinas: ['Análise Sintática', 'Gramática I', 'Lit. Brasileira']
    },
    {
      nome: 'Português',
      semestre:'2',
      disciplinas: ['Latim I', 'Gramática II', 'Lit. Estrangeira']
    }
  ]
}

