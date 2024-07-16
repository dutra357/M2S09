import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, FormsModule, HeaderComponent, SidebarComponent
  ],
  exports: [HeaderComponent, SidebarComponent]
})
export class SharedModuleModule { }
