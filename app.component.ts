import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  entrada:string;
  soma:number = 0;
  saida:string;
  diferenca:number;
  invalido = "";

  somatoria($event, entrada){
    this.invalido = "";
    this.saida = "";
    entrada = Number(entrada)
    if (entrada == 10 || entrada == 25){
      this.soma = Number(this.soma) + entrada;
      if(this.soma == 45){
        this.saida = "Retire seu refrigerante";
        this.soma = 0;
      }else if(this.soma > 45){
      this.saida = `Retire seu Refrigerante,Porém você perdeu ${this.soma - 45}`; 
      this.soma = 0;
    }
   }else{
    this.invalido = " Moeda não aceita pela máquina";
   } 
    this.entrada = ''
 }
   
}
