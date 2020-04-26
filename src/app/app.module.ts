import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeucomponenteComponent } from './meucomponente/meucomponente.component';
import { Outro4Component } from './outro4/outro4.component';

@NgModule({
  declarations: [
    AppComponent,
    MeucomponenteComponent,
    Outro4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
