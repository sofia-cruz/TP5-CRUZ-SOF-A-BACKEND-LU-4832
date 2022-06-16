import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LibroComponent } from './components/layout/api-punto1/libro/libro.component';
import { LibroFormComponent } from './components/layout/api-punto1/libro-form/libro-form.component';
import { TransaccionComponent } from './components/layout/api-punto2/transaccion/transaccion.component';
import { TransaccionFormComponent } from './components/layout/api-punto2/transaccion-form/transaccion-form.component';
import { PasajeComponent } from './components/layout/api-punto3/pasaje/pasaje.component';
import { PasajeFormComponent } from './components/layout/api-punto3/pasaje-form/pasaje-form.component';
import { CategoryPipe } from './pipes/pasaje/category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LibroComponent,
    LibroFormComponent,
    TransaccionComponent,
    TransaccionFormComponent,
    PasajeComponent,
    PasajeFormComponent,
    CategoryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
