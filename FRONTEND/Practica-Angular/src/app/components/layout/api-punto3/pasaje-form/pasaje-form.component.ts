import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PasajeType } from 'src/app/models/pasaje-type';
import { PersonaType } from 'src/app/models/persona-type';
import { ApiPasajeService } from 'src/app/services/pasaje/api-pasaje.service';
import { ApiPersonaService } from 'src/app/services/persona/api-persona.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pasaje-form',
  templateUrl: './pasaje-form.component.html',
  styleUrls: ['./pasaje-form.component.css']
})
export class PasajeFormComponent implements OnInit {
  accion = "";
  pasaje!: PasajeType;
  personas!: Array<PersonaType>;
  display!: boolean;

  constructor(private pasajeService: ApiPasajeService, private router: Router, private activatedRoute: ActivatedRoute, private personaService: ApiPersonaService) { }

  crearPasaje(id: string) {
    this.pasaje = new PasajeType();
    if (this.accion == "new") this.pasaje.fechaCompra.toLocaleString();
    this.pasajeService.getPasaje(id).subscribe((result: any) => {
      Object.assign(this.pasaje, result);

      this.pasaje.pasajero = this.personas.find((persona) => (persona._id == this.pasaje.pasajero._id))!;
      console.log(result)
    })
  }

  cargarPersonas() {
    this.personas = new Array<PersonaType>();

    this.personaService.getPersonas().subscribe(
      (result: any) => {
        Object.assign(this.personas, result)
        console.log(this.personas)
      })
  }

  cancelar() {
    this.router.navigate(['pasajes/recuperar'])
  }

  guardarPasaje() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-primary'
      },
      buttonsStyling: false
    })

    this.pasajeService.createPasaje(this.pasaje).subscribe((result: any) => {
      console.log(result);
      swalWithBootstrapButtons.fire({
        icon: 'success',
        title: 'Pasaje Guardado',
        confirmButtonText: 'Ok',
        showCancelButton: true,
        cancelButtonText: `Registrar otro`
      }).then((choice) => {
        if (choice.isConfirmed) {
          this.router.navigate(['/pasajes/recuperar'])
        } else {
          window.location.reload();
        }
      })
    })
  }

  editarPasaje() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
      },
      buttonsStyling: false
    })

    this.pasajeService.editPasaje(this.pasaje).subscribe((result: any) => {
      console.log(result);
      swalWithBootstrapButtons.fire({
        icon: 'success',
        title: 'Pasaje Actualizado',
        confirmButtonText: 'Ok'
      }).then((choice) => {
        if (choice.isConfirmed) {
          this.router.navigate(['/pasajes/recuperar'])
        }
      })
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] == "0") {
        this.accion = "new";
        this.display = true;
        this.cargarPersonas()
        this.pasaje = new PasajeType();
      } else {
        this.accion = "update";
        this.display = true;
        this.cargarPersonas()
        this.crearPasaje(params['id']);
      }
    });
  }
}
