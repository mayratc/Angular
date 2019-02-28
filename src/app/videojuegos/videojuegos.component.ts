import { Component } from '@angular/core';

@Component({
  selector:'videojuegos',
  template:`
    <h2>Componente de {{name}}</h2>
    <h3>EL MEJOR JUEGO ES: {{mejor_juego}}</h3>
  `
})

export class videoJuegosComponent {
    public name = 'videojuegos 2018';
    public mejor_juego = 'GTA 5'
}
