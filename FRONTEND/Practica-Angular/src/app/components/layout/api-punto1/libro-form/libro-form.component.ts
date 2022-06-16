import { Component, OnInit } from '@angular/core';
import { LibroType } from 'src/app/models/libro-type';
import { ApiLibroService } from 'src/app/services/libro/api-libro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-libro-form',
  templateUrl: './libro-form.component.html',
  styleUrls: ['./libro-form.component.css']
})
export class LibroFormComponent implements OnInit {
  libro!: LibroType;

  constructor(private libroService: ApiLibroService) {
    this.libro = new LibroType();
    this.libro.destacado = false;
  }

    guardarLibro() {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
        },
        buttonsStyling: false
      })

      this.libroService.crearLibro(this.libro).subscribe((result: any) => {
        console.log(result);
        console.log(this.libro);
        swalWithBootstrapButtons.fire({
          icon: 'success',
          title: 'Libro Guardado',
          confirmButtonText: 'Ok'
        }).then((choice) => {
          if (choice.isConfirmed) {
            window.location.reload();
          }
        })
      });
    }

    ngOnInit(): void {
    }

  }
