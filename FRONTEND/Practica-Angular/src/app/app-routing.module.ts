import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibroFormComponent } from './components/layout/api-punto1/libro-form/libro-form.component';
import { LibroComponent } from './components/layout/api-punto1/libro/libro.component';
import { TransaccionFormComponent } from './components/layout/api-punto2/transaccion-form/transaccion-form.component';
import { TransaccionComponent } from './components/layout/api-punto2/transaccion/transaccion.component';
import { PasajeFormComponent } from './components/layout/api-punto3/pasaje-form/pasaje-form.component';
import { PasajeComponent } from './components/layout/api-punto3/pasaje/pasaje.component';

const routes: Routes = [
  {path: 'libros/destacados', component: LibroComponent},
  {path: 'libros/formulario', component: LibroFormComponent},
  {path: 'transaccion/conversor', component: TransaccionFormComponent},
  {path: 'transaccion/recuperar', component: TransaccionComponent},
  {path: 'pasajes/recuperar', component: PasajeComponent},
  {path: 'pasajes/formulario/:id', component: PasajeFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
