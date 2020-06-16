import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable, throwError } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { map, catchError } from 'rxjs/operators';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint: string = 'http://localhost:8080/api/clientes';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });


  constructor(
    public http: HttpClient,
    public router: Router
  ) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get(this.urlEndPoint).pipe(
      map((response) => response as Cliente[])
    );
  }

  create(cliente: Cliente): Observable<any> {

    return this.http.post<any>(this.urlEndPoint, cliente, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        Swal.fire(
          e.error.mensaje,
          e.error.error,
          'error'
        );
        return throwError(e);
      })
    );
  }

  getCliente(id): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e =>{
        this.router.navigate(['/clientes']);
        Swal.fire(
          e.error.mensaje,
          e.error.error,
          'error'
        );
        return throwError(e);
      })
    )
  }

  update(cliente: Cliente): Observable<any>{
    return this.http.put<any>(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        Swal.fire(
          e.error.mensaje,
          e.error.error,
          'error'
        );
        return throwError(e);
      })
    );
  }

  delete(id: number): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        Swal.fire(
          e.error.mensaje,
          e.error.error,
          'error'
        );
        return throwError(e);
      })
    );
  }
}
