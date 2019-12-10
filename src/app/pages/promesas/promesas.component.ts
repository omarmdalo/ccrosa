import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    


    this.contartres().then((resolve)=>{
      console.log('Todo bien', resolve);
    })
    .catch((error)=>{
      console.error('Ocurrio un error', error);
    })
  }

  ngOnInit() {
  }


  contartres(): Promise<boolean>{
    return new Promise((resolve, reject) => {
      let contador = 0;

      let intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve(true);
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }

}
