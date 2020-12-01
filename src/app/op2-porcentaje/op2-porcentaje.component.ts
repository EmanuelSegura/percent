import { Component } from '@angular/core';


@Component({
  selector: 'app-op2-porcentaje',
  templateUrl: './op2-porcentaje.component.html',
  styleUrls: ['./op2-porcentaje.component.scss']
})
export class Op2PorcentajeComponent  {

  title = 'porcentaje';
  
  currentVal = 0;
  currentTotal = 0;
  result:any = '';
  correcto:boolean;
  paragraphResult:string;
  calculations: Array<String> = [];
  empty:boolean = true;
  record:boolean = false;

  total = 0;


  getVal(value){
    this.currentVal = value;
    return this.currentVal;
  }

  getTotal(value){
    this.currentTotal = value;

    return parseInt(value);
  }

  getResult(){
    if (!Number(this.currentTotal) || !Number(this.currentVal)) {
      // this.result = 'Valores incorrectos';
      this.correcto = false;
      console.log("valores incorrectos");  
  } else {
    this.correcto = true;
    console.log('valores correctos');
    this.result = (((this.currentVal * 100) / this.currentTotal)).toFixed(2);
    console.log(this.result);
    this.paragraphResult = this.getParagraphResult(this.currentVal,this.currentTotal,this.result);
  }
  return this.result;
}

  getParagraphResult(val,total,result):string{
    let paragraph:string = `Si el total es ${total} entonces ${val} es el ${result}%`; 
    this.calculations.push(paragraph);
    this.empty = false;
    this.record = true;
    return paragraph;
  }
  
  clearRecord(){
  this.calculations = [];
  this.empty = true;
  }


}

 //Opcion 2


//  function calcularOP2() {

//      let cantidad = parseInt(document.querySelector('#inputCantidad-OP2').value);
//      let total = parseInt(document.querySelector('#inputValor-OP2').value);
//      let resultado = document.querySelector('#resultado-OP2');

//      if (isNaN(cantidad) || isNaN(total)) {
//          resultado = '';
//          document.querySelector('#resultado-OP2').innerHTML = resultado;
//      } else {
//          resultado = (((cantidad * PORCENTAJE) / total)).toFixed(2) + '%';
//          document.querySelector('#resultado-OP2').innerHTML = resultado;
//          // console.log(resultado);
//      }
//  }
