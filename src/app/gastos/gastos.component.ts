import { Component, OnInit } from '@angular/core';

import { Gasto } from '../models/gasto.model';
import { GastoService } from '../services/gasto/gasto.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent implements OnInit {
  gastos: Gasto[] = [
    new Gasto('1', 'chocolate', '4.80'),
    new Gasto('2', 'esfiha', '5.20'),
    new Gasto('3', 'tênis', '249.90'),
    new Gasto('4', 'carteira', '120.00'),
    new Gasto('5', 'gasolina', '50.00'),
  ];
  gasto: Gasto = new Gasto();

  constructor(private gastoService: GastoService) { }

  ngOnInit() {
    // this.list();
  }

  list(): void {
    this.gastoService.getGastos()
      .subscribe(response => this.gastos = response);
  }

  add(gasto: object): void {
    if (!gasto) { return; }

    gasto['date'] = Date.parse(gasto['date']);

    this.gastos.push(gasto as Gasto);

    // this.gastoService.postGasto(gasto as Gasto)
    //   .subscribe(response => {
    //     this.gastos.push(response);
    //   });
  }

  delete(id: string): void {
    this.gastos = this.gastos.filter(g => g.id !== id);

    this.gastoService.deleteGasto(id)
      .subscribe();
  }
}
