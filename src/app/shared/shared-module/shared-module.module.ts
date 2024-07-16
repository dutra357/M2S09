import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, FormsModule, HeaderComponent, SidebarComponent
  ],
  exports: [HeaderComponent, SidebarComponent]
})
export class SharedModuleModule { }
