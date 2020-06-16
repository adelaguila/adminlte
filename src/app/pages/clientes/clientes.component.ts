import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClienteService } from 'src/app/services/service.index';
import { Cliente } from 'src/app/models/cliente';

import { LazyLoadEvent } from 'primeng/api';
import { FilterMetadata } from 'primeng/api';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  datasource: Cliente[];

  clientes: Cliente[];
  cols: any[];

  // first = 0;
  // rows = 10;

  totalRecords: number;

  loading: boolean;

  selectedCliente: Cliente;
  selectedClientes: Cliente[];

  constructor(
    public _clienteService: ClienteService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getClientes();

    this.cols = [
      { field: 'id', header: 'ID', width: '10%' },
      { field: 'nombre', header: 'Nombre', width: '25%' },
      { field: 'apellido', header: 'Apellido', width: '25%' },
      { field: 'email', header: 'Email', width: '25%' },
      { field: 'createAt', header: 'CreateAt', width: '15%' }
    ];

    this.loading = true;
  }

  loadClientesLazy(event: LazyLoadEvent) {
    console.log(event);
    this.loading = true;
    setTimeout(() => {
      if (this.datasource) {
        this.clientes = this.datasource.slice(event.first, (event.first + event.rows));
        console.log(this.clientes);
        this.loading = false;
      }
    }, 1000);
  }

  getClientes() {
    this._clienteService.getClientes().subscribe(
      (clientes) => {
        this.datasource = clientes;
        this.totalRecords = this.datasource.length;
      }
    );
  }

  editar() {
    if (this.selectedCliente) {
      this.router.navigate(['/clientes/formulario', this.selectedCliente.id]);
    } else {
      Swal.fire(
        'Atención',
        'Debe seleccionar un cliente de la lista paracontinuar con el proceso',
        'warning'
      )
    }
  }

  delete() {
    if (this.selectedCliente) {
      Swal.fire({
        title: '¿Está seguro?',
        text: `¿Seguro que desea eliminar al cliente ${this.selectedCliente.nombre} ${this.selectedCliente.apellido}`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar cliente!',
        cancelButtonText: 'No, cancelar!',
      }).then((result) => {
        if (result.value) {
          this._clienteService.delete(this.selectedCliente.id).subscribe(
            response => {
              this.clientes = this.clientes.filter(cli => cli !== this.selectedCliente)
              Swal.fire(
                'Eliminado!',
                'El cliente se eliminó correctamente.',
                'success'
              )
            }
          )
        }
      })
    } else {
      Swal.fire(
        'Atención',
        'Debe seleccionar un cliente de la lista paracontinuar con el proceso',
        'warning'
      )
    }
  }

  onRowSelect(event) {
    this.selectedCliente = event.data;
  }
}
