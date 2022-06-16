import { Component, OnInit } from '@angular/core';
import { TransaccionType } from 'src/app/models/transaccion-type';
import { ApiTransaccionService } from 'src/app/services/transaccion/api-transaccion.service';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit {
  transacciones: Array<TransaccionType> = []
  display!: boolean;
  divisaOrigen!:string;
  divisaDestino!:string;
  option1!:boolean;
  option2Form!:boolean;
  option2!:boolean;

  constructor(private transaccionService: ApiTransaccionService) {}

  recuperarTodos(){
    this.option2Form=false;
    this.option2=false;
    this.option1=true;
    this.divisaDestino ="";
    this.divisaOrigen ="";

    this.transaccionService.getTransacciones().subscribe(
      (data: Array<TransaccionType>) => {
        Object.assign(this.transacciones, data)
        console.log(this.transacciones)
        this.display = true;
      }
    )
  }

  changeOption(){
    this.option1=false;
    this.option2Form=true;
    this.display = true;
  }

  recuperarFiltro(){
    this.transaccionService.getTransaccionesFiltro(this.divisaOrigen, this.divisaDestino).subscribe(
      (data: Array<TransaccionType>) => {
        this.transacciones = []
        Object.assign(this.transacciones, data)
        console.log(this.transacciones)
        this.option2=true;
      }
    )
  }

  ngOnInit(): void {
  }

}
