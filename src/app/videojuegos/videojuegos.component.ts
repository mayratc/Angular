import { Component } from '@angular/core';

@Component({
  selector:'videojuegos',
  templateUrl:'./videojuegos.component.html'
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
