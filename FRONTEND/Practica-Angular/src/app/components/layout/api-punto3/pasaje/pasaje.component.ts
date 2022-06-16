import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasajeType } from 'src/app/models/pasaje-type';
import { ApiPasajeService } from 'src/app/services/pasaje/api-pasaje.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pasaje',
  templateUrl: './pasaje.component.html',
  styleUrls: ['./pasaje.component.css']
})
export class PasajeComponent implements OnInit {
  pasajes!: Array<PasajeType>;
  categoria!:string;

  constructor(private pasajeService: ApiPasajeService, private router: Router) {
    this.pasajes = new Array<PasajeType>();

    this.pasajeService.getPasajes().subscribe(
      (result: any) => {
        Object.assign(this.pasajes, result)
        console.log(this.pasajes)
      })
  }

  borrarPasaje(pasaje: any) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Deseas eliminar este Pasaje?',
      text: "No podrás revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((choice) => {
      if (choice.isConfirmed) {
        this.pasajeService.deletePasaje(pasaje._id).subscribe()
        swalWithBootstrapButtons.fire({
          icon: 'success',
          title: 'Pasaje Eliminado',
          confirmButtonText: 'Ok'
        }).then((choice) => {
          if (choice.isConfirmed) {
            window.location.reload();
          }
        })
      } else{
        window.location.reload();
      }
    })
  }

  crearPasaje() {
    this.router.navigate(['pasajes/formulario', 0])
  }

  editarPasaje(pasaje: any) {
    this.router.navigate(['pasajes/formulario', pasaje._id])
  }

  recuperarFiltro(){
    this.pasajeService.getPasajesFiltro(this.categoria).subscribe(
      (data: Array<PasajeType>) => {
        this.pasajes = []
        Object.assign(this.pasajes, data)
        console.log(this.pasajes)
      }
    )
  }

  clear(){
    this.categoria = "";
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
