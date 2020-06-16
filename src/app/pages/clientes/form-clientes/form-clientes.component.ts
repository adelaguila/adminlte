import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/service.index';
import { Router, ActivatedRoute } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.css']
})
export class FormClientesComponent implements OnInit {

  public cliente: Cliente = new Cliente();
  public titulo: string = 'Crear Cliente';

  constructor(
    public _clienteService: ClienteService,
    public router: Router,
    public activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cargarCliente();
  }

  cargarCliente(): void{
    this.activateRoute.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this._clienteService.getCliente(id).subscribe((cliente)=> this.cliente = cliente);
      }
    })
  }

  create(): void {
    this._clienteService.create(this.cliente).subscribe(
      respuesta => {
        this.router.navigate(['/clientes']);
        Swal.fire(
          'Nuevo Cliente',
          `Cliente ${respuesta.cliente.nombre} creado con éxito`,
          'success'
        )
      }
    )
  }

  update(): void{
    this._clienteService.update(this.cliente).subscribe(
      respuesta => {
        this.router.navigate(['/clientes']);
        Swal.fire(
          'Cliente Actualizado',
          `Cliente ${respuesta.cliente.nombre} actualizado con éxito!`,
          'success'
        )
      }
    )
  }
}
