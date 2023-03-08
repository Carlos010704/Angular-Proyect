import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculasService } from 'src/app/service/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculasService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Pelicula[];
  public pelicula: Pelicula;
  public fecha: any;

  constructor(
    private _peliculaService: PeliculasService
  ) {
    this.titulo = 'Componente Peliculas';
    this.peliculas = [
      new Pelicula('Avengers: Endgame', 2019, 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A4B58B11C7019B5403E07D551249121C4F4CC99119907F4460F0725B34A27086/scale?width=1200&aspectRatio=1.78&format=jpeg'),
      new Pelicula('Spiderman: Far From Home', 2019,'https://www.ondishmag.com/wp-content/uploads/2021/12/p14569140_v_h10_ag.jpg'),
      new Pelicula('Spiderman: No Way Home', 2021,'https://as01.epimg.net/meristation/imagenes/2021/12/16/reportajes/1639644481_655591_1640209354_portada_normal.jpg'),
      new Pelicula('Dr.Stranger: Multiverse of Madness', 2022,'https://i0.wp.com/lanoticia.com/wp-content/uploads/2022/04/dr-strange-multiverse-of-madness.jpg?fit=1200%2C747&ssl=1'),
      new Pelicula('Interstellar', 2014,'https://historiaenperspectiva.cl/wp-content/uploads/2019/07/Interstellar-redux-1024x575.jpg'),
    ];

    this.fecha = new Date(2022, 9, 27)
  }

  ngOnInit() {
    // console.log(this.peliculas);
    
    console.log('evento oninit')

    console.log(this._peliculaService.saludo());
    

  }

  ngDoCheck(): void {
    console.log('DoCheck lanzado!!');
    
  }

  cambiarTitulo(){
    this.titulo = 'Peliculas!!'
  }

  ngOnDestroy(): void {
    console.log('El componete se elimino!!');
    
  }

  mostrarFavorito(event: any) {
   this.pelicula = event.pelicula;
   console.log(event.pelicula.title);
   
  }
}

