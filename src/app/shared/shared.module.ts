import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule

  ],
  exports:[
    SpinnerComponent,
    SidebarComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
