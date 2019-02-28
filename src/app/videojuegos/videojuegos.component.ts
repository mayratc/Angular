import { Component } from '@angular/core';

@Component({
  selector:'videojuegos',
  template:`
    <h2>Componente de {{name}}</h2>
    <h3 [style.background]='color'
        *ngIf="mostrar_retro != true">EL MEJOR JUEGO ES: {{mejor_juego}}</h3>
    <h3 [style.background]='color'
        *ngIf="mostrar_retro ">EL MEJOR JUEGO ES: {{mejor_juego_retro}}</h3>

    <h2>Listado de videojuegos</h2>
    <ul>
        <li *ngFor="let game of videojuegos">{{game}}</li>
    </ul>
  `
})

export class videoJuegosComponent {
    public name = 'videojuegos 2018';
    public mejor_juego = 'GTA 5';
    public mejor_juego_retro = 'Super Mario 64';
    public mostrar_retro = true;
    public color = this.mostrar_retro ? 'yellow':'red';
    public videojuegos = [
        'Los simpson hit and run',
        'Assins creed',
        'Fornite',
        'Candy Crush',
        'Tekken'
    ]
}
