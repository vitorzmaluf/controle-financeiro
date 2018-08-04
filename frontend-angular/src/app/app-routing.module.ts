import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GastosComponent } from './gastos/gastos.component';
import { GastoInfoComponent } from './gasto-info/gasto-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'gastos', component: GastosComponent },
  { path: 'gastos/:id', component: GastoInfoComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
