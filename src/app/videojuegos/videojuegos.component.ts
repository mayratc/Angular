import { Component } from '@angular/core';

@Component({
  selector:'videojugos',
  template:`
    <h2>Componente de {{name}}</h2>
  `
})

export class videoJuegosComponent {
    public name = 'videojuegos 2018';
}
