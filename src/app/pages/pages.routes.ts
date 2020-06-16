import { RouterModule, Routes } from "@angular/router";

import { LoginGuardGuard } from '../services/service.index';

import { PagesComponent } from './pages.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormClientesComponent } from './clientes/form-clientes/form-clientes.component';


const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate:[LoginGuardGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'} },
      // { path: 'progress', component: ProgressComponent, data: {titulo: 'Progress'}},
      // { path: 'graficas1', component: Graficas1Component, data: {titulo: 'Gráficas'} },
      // { path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'} },
      // { path: 'account-settings', component: AccoutSettingsComponent, data: {titulo: 'Ajustes'} },
      // { path: 'perfil', component: ProfileComponent, data: {titulo: 'Perfil de Usuario'} },

      // Mantenimientos
      { path: 'usuarios', component: UsuariosComponent, data: {titulo: 'Mantenimiento de Usuarios'} },
      { path: 'clientes', component: ClientesComponent, data: {titulo: 'Mantenimiento de Clientes'} },
      { path: 'clientes/formulario', component: FormClientesComponent, data: {titulo: 'Crear Cliente'} },
      { path: 'clientes/formulario/:id', component: FormClientesComponent, data: {titulo: 'Actualizar Cliente'} },

      { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
    ]
  },
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
