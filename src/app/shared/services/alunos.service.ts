import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }

  getAlunos(): any {
    return this.alunos;
  }

  getAluno(aluno: {
    nome: string,
    cpf: string,
    email: string,
    celular: string,
    curso: string
  }): any {
    for(let entity of this.alunos) {
      if((entity.nome === aluno.nome) && (entity.cpf === aluno.cpf)) {
        return entity;
      } else {
        alert('Aluno não encontrado!')
      }
    }
  }


  cadastrarAluno(novo: {
    nome: string,
    cpf: string,
    email: string,
    celular: string,
    curso: string
  }) {
    this.aluno.nome = novo.nome;
    this.aluno.cpf = novo.cpf;
    this.aluno.email = novo.email;
    this.aluno.celular = novo.celular;
    this.aluno.curso = novo.curso;

    this.alunos.push(this.aluno);

    alert('Aluno cadastrado com sucesso!')
  }

  excluirAluno(excluir: {
    nome: string,
    cpf: string,
    email: string,
    celular: string,
    curso: string
  }): boolean {
    for(let entity of this.alunos) {
      if((entity.nome === excluir.nome) && (entity.cpf === excluir.cpf)) {
        let index = this.alunos.indexOf(entity);
        if (index > -1) {
          this.alunos.splice(index, 1);
          alert('Aluno excluído com sucesso!')
          return true;
        }
      }
    }
    alert('Aluno não encontrado!')
    return false;
  }


  aluno = {
    nome: "",
    cpf: "",
    email: "",
    celular: "",
    curso: ""
  };

  alunos = [
    {
      nome: "Joao",
      cpf: "00000000000",
      email: "joao@gmail.com",
      celular: "9999999",
      curso: "Matemática"
    },
    {
      nome: "Maria",
      cpf: "11111111111",
      email: "maria@gmail.com",
      celular: "8888888",
      curso: "Português"
    },
    {
      nome: "Jose",
      cpf: "22222222222",
      email: "jose@gmail.com",
      celular: "7777777",
      curso: "Inglês"
    },
    {
      nome: "Laura",
      cpf: "33333333333",
      email: "laura@gmail.com",
      celular: "88888888",
      curso: "Literatura Estr."
    }
  ]
}
