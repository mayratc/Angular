import { Component } from '@angular/core';

@Component({
  selector:'videojuegos',
  templateUrl:'./videojuegos.component.html'
})

export class videoJuegosComponent {
    public name: string;
    public mejor_juego: string;
    public mejor_juego_retro: string;
    public mostrar_retro: boolean;
    public color: string;
    public year: number;
    public videojuegos: Array<string>;

    constructor(){
        this.name= 'videojuegos 2018';
        this.mejor_juego= 'GTA 5';
        this.mejor_juego_retro= 'Super Mario 64';
        this.mostrar_retro= true;
        this.color = this.mostrar_retro ? 'yellow':'red';
        this.year= 2018;
        this.videojuegos = [
            'Los simpson hit and run',
            'Assins creed',
            'Fornite',
            'Candy Crush',
            'Tekken'
        ];
    }
}
