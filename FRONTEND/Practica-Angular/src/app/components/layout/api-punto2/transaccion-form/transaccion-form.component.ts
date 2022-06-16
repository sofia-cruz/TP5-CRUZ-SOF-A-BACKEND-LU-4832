import { Component, OnInit } from '@angular/core';
import { TransaccionType } from 'src/app/models/transaccion-type';
import { ApiConvertService } from 'src/app/services/transaccion/api-convert.service';
import { ApiTransaccionService } from 'src/app/services/transaccion/api-transaccion.service';

@Component({
  selector: 'app-transaccion-form',
  templateUrl: './transaccion-form.component.html',
  styleUrls: ['./transaccion-form.component.css']
})
export class TransaccionFormComponent implements OnInit {
  value!: string;
  from!: string;
  to!: string;
  resultado!: string;
  transaccion!: TransaccionType;
  numero!: string;

  constructor(private convertService: ApiConvertService, private transaccionService: ApiTransaccionService) {
    this.transaccion = new TransaccionType();
  }

  convertir() {
    //this.value = '1';
    //this.from = 'USD';
    //this.to = 'ARS';

    this.convertService.convert(this.value, this.from, this.to).subscribe((result) => {
      this.transaccion.cantidadDestino = parseFloat(result.result);
      //console.log("CANTIDAD DESTINO = " + this.transaccion.cantidadDestino);

      this.resultado = result.result;
      console.log(this.resultado);

      this.transaccion.monedaOrigen = this.from;
      this.transaccion.monedaDestino = this.to;
      this.transaccion.cantidadOrigen = parseFloat(this.value);
      this.transaccion.tasaConversion = 0;
      this.transaccionService.crearTransaccion(this.transaccion).subscribe((data: any) => {
        console.log(data);
        console.log(this.transaccion);
      });
    });
  }

  crearTransaccion() {
    this.transaccion.cantidadDestino = this.transaccion.cantidadOrigen * this.transaccion.tasaConversion;
    this.transaccionService.crearTransaccion(this.transaccion).subscribe((result: any) => {
      console.log(result);
      console.log(this.transaccion);
    });
  }

  ngOnInit(): void {
    //this.convertir();
  }

}