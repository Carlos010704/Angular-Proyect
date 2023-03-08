import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";

@Injectable()
export class PeliculasService{
    
    saludo(){
        return 'Servicio Conectado...'
    }

}