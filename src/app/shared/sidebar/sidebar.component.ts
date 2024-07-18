import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, MatButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  logadoAdm: boolean = true;

  isValid = true;


  constructor(private router: Router) {
  }

  disciplinas() {
    this.router.navigate(["disciplinas"]);
  }

  alunos() {
    if (this.logadoAdm) {
      this.router.navigate(["alunos"]);
    }
  }

}
