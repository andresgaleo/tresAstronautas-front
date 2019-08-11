import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.css']
})
export class MotorComponent implements OnInit {

  //Para tomar el valor de la etiqueta, pero esta en otro componente por ende no se puede tomar
  /*@ViewChild('counterdown') counterdown: ElementRef;*/

  constructor() { }

  ngOnInit() {
  }

  countDown(){
    let init = 10;
    let interval = setInterval(()=>{
      init = init - 1;
      (<HTMLSpanElement>document.getElementById("counterdown")).innerText = init.toString();
      //Capturar valor, funcionaria si estuviese en la template motor.
      //this.counterdown.nativeElement.innerText=init;
      if(init==0){
        clearInterval(interval);
      }
    },1000);
  }

}
