import { Component, OnInit } from '@angular/core';
import { LibroType } from 'src/app/models/libro-type';
import { ApiLibroService } from 'src/app/services/libro/api-libro.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  libros: Array<LibroType>=[];
  libro!: LibroType;
  numImg:number=0;
  resultado!:any;

  constructor(private libroService: ApiLibroService) { 
    this.iniciar();
    this.libroService.getLibrosDestacados().subscribe((result:Array<LibroType>) => {
      this.resultado=result;
      console.log(result);
      Object.assign(this.libros, result);
      Object.assign(this.libro, result[0]);
    });
    
  }

  iniciar(){
    this.libro = new LibroType;
  }
  
  siguiente(){
    this.numImg++
    if(this.numImg >= this.libros.length){
      this.numImg = 0
    }
    this.libro = this.libros[this.numImg]
  }

  anterior(){
    this.numImg--
    if(this.numImg < 0){
      this.numImg = this.libros.length - 1
    }
    this.libro = this.libros[this.numImg]
    
  }

  ngOnInit(): void {

  }

}
