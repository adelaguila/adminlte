import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';


// Modulos
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
// import { ChartsModule } from 'ng2-charts';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

//Pipes
// import { PipesModule } from '../pipes/pipes.module';


import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { UsuariosComponent } from './usuarios/usuarios.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormClientesComponent } from './clientes/form-clientes/form-clientes.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    UsuariosComponent,
    ClientesComponent,
    FormClientesComponent
  ],
  exports: [
    DashboardComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    PaginatorModule,
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    // ChartsModule,
    // PipesModule
  ]
})
export class PagesModules{}
