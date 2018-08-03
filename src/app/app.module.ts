import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GastosComponent } from './gastos/gastos.component';
import { GastoInfoComponent } from './gasto-info/gasto-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GastosComponent,
    GastoInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
