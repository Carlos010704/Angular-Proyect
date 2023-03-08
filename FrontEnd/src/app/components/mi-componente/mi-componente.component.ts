import { Component } from "@angular/core";

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})
export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean;
 
    constructor(){
        this.titulo = 'Mi Componente';
        this.comentario = 'Primer Componente';
        this.year = 2022;
        console.log('Componente cargado!!');
        console.log(this.titulo, this.comentario, this.year);
        this.mostrarPeliculas = true;
        
    }

    ocultarPeliculas(){
        this.mostrarPeliculas = false;
    }
    
}