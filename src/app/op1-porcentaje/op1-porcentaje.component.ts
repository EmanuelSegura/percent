import { Component } from '@angular/core';

@Component({
  selector: 'app-op1-porcentaje',
  templateUrl: './op1-porcentaje.component.html',
  styleUrls: [
    './op1-porcentaje.component.scss'
  ]
})
export class Op1PorcentajeComponent  {


    title = 'porcentaje';
  
    currentVal = 0;
    currentPercent = 0;
    result:any = '';
    correcto:boolean;
    paragraphResult:string;
    calculations: Array<String> = [];
    empty:boolean = true;
    record:boolean = false;
  
    getVal(value){
      this.currentVal = value;
      return this.currentVal;
    }
  
    getPercent(value){
      this.currentPercent = value;
      return parseInt(value);
    }
  
    getResult(){
        if (!Number(this.currentVal) || !Number(this.currentPercent)) {
          // this.result = 'Valores incorrectos';
          this.correcto = false;
          console.log("valores incorrectos");  
      } else {
        this.correcto = true;
        console.log('valores correctos');
        this.result = (((this.currentVal / 100) * this.currentPercent)).toFixed(2);
        console.log(this.result);
        this.paragraphResult = this.getParagraphResult(this.currentVal,this.currentPercent,this.result);
      }
      return this.result;
    }
  
    getParagraphResult(val,percent,result):string{
        let paragraph:string = `El ${percent}% de ${val} es: ${result}`; 
        this.calculations.push(paragraph);
        this.empty = false;
        this.record = true;
        return paragraph;
    }
  
    clearRecord(){
      this.calculations = [];
      this.empty = true;
    }
  
  
  
  
  
    // end
  }


