import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { NavbarComponent } from './navbar/navbar.component';

//Pipes
// import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  imports:[
    RouterModule,
    CommonModule,
    // PipesModule
  ],
  declarations: [
    NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    NavbarComponent
  ],
  exports: [
    NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
