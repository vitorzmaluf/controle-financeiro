import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Gasto } from '../../models/gasto.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class GastoService {
  apiUrl = 'http://localhost:3000';
  gastoUrl = `${this.apiUrl}/api/gasto`;

  constructor(
    private http: HttpClient,
  ) { }

  // create spending and return unique id
  postGasto(gasto: Gasto): Observable<Gasto> {
    return this.http.post<Gasto>(this.gastoUrl, gasto, httpOptions)
      .pipe(
        tap((result: Gasto) => console.log(`gasto adicionado, id: ${result.id}`)),
        catchError(this.errorHandler<Gasto>('postGasto'))
      );
  }

  // entire list of spendings
  getGastos(): Observable<Gasto[]> {
    return this.http.get<Gasto[]>(this.gastoUrl)
      .pipe(
        tap(gastos => console.log(`gastos recebidos: ${gastos}`)),
        catchError(this.errorHandler<Gasto[]>('getGastos', [])),
      );
  }

  // specific spending by unique id
  getGasto(id: string): Observable<Gasto> {
    const url = `${this.gastoUrl}/${id}`;

    return this.http.get<Gasto>(url)
      .pipe(
        tap(result => console.log(`gasto recebido, id: ${id}`)),
        catchError(this.errorHandler<Gasto>('getGasto'))
      );
  }

  // update spending based on unique id
  putGasto(gasto: Gasto): Observable<any> {
    return this.http.put(this.gastoUrl, gasto, httpOptions)
      .pipe(
        tap(result => console.log(`gasto atualizado, id: ${gasto.id}`)),
        catchError(this.errorHandler<any>('putGasto'))
      );
  }

  // delete spending with given id
  deleteGasto(id: string): Observable<any> {
    const url = `${this.gastoUrl}/${id}`;

    return this.http.delete<Gasto>(url, httpOptions)
      .pipe(
        tap(result => console.log(`gasto deletado, id: ${id}`)),
        catchError(this.errorHandler<Gasto>('deleteGasto'))
      );
  }

  private errorHandler<T>(method = 'method', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      console.log(`${method} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
