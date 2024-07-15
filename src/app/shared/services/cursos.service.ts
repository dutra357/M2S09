import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(): any {
    return this.cursos;
  }



  cursos = [
    {
      id: '1',
      nome: 'Matemática'
    },
    {
      id: '2',
      nome: 'Português'
    }
  ];
}
