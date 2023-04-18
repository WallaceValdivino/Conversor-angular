import { Component } from '@angular/core';

@Component({
  selector: 'app-conver',
  templateUrl: './conver.component.html',
  styleUrls: ['./conver.component.css']
})
export class ConverComponent {
valor1 : number = 0;
valoreuro : number = 0;
valordolar : number = 0;
valorlibra : number = 0;
resultadodolar : number = 0;
resultadoeuro : number = 0;
resultadolibra : number = 0;
operacao() : void{


  this.resultadodolar =   this.valor1 *   this.valordolar;
  this.resultadolibra =   this.valor1 *   this.valorlibra;
  this.resultadoeuro =   this.valor1 *   this.valoreuro;

}
}
