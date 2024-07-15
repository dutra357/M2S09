import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AlunosComponent } from './alunos/alunos.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'alunos', component: AlunosComponent},
    {path: 'cadastroAlunos', component: CadastroAlunoComponent},
    {path: 'disciplinas', component: DisciplinasComponent},
    {path: 'usuarios', component: UsuariosComponent}
];
