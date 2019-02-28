import { Component } from '@angular/core';

@Component({
  selector:'videojuegos',
  template:`
    <h2>Componente de {{name}}</h2>
    <h3 [style.background]='color'
        *ngIf="mostrar_retro != true">EL MEJOR JUEGO ES: {{mejor_juego}}</h3>
    <h3 [style.background]='color'
        *ngIf="mostrar_retro ">EL MEJOR JUEGO ES: {{mejor_juego_retro}}</h3>
  `
})

export class videoJuegosComponent {
    public name = 'videojuegos 2018';
    public mejor_juego = 'GTA 5';
    public mejor_juego_retro = 'Super Mario 64';
    public mostrar_retro = true;
    public color = this.mostrar_retro ? 'yellow':'red';
}
