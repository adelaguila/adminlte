import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  mantenimiento: any = [
    {
          titulo: 'Mantenimiento de Tablas',
          icono: 'fas fa-table',
          submenu: [
            { titulo: 'Usuarios', icono: 'fas fa-users', url: '/usuarios' },
            { titulo: 'Clientes', icono: 'fas fa-pople', url: '/clientes' }
          ]
    },
  ];

  operaciones: any = [
    {
          titulo: 'Operaciones',
          icono: 'fas fa-project-diagram',
          submenu: [
            { titulo: 'Abonado', icono: 'fas fa-network-wired', url: '/login' },
            { titulo: 'Facturación', icono: 'fas fa-users', url: '/register' },
          ]
    },
  ]


  constructor() { }
}
