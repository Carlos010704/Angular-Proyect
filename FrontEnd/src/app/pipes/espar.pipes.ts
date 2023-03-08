import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'espar'
})

export class EsParPipe implements PipeTransform{
    transform(value: any) {
        let espar = 'es inpar';
        if(value %2 == 0){
            espar = 'es par'
        }
        return value+ ' y ' + espar; 
    }
}