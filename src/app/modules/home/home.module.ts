import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatGeneralModule } from '../material/general.module';
import { FormularioComponent } from './components/formulario/formulario.component';
import { VistaPreviaComponent } from './components/vista-previa/vista-previa.component';


@NgModule({
  declarations: [HomeComponent, FormularioComponent, VistaPreviaComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGeneralModule
  ]
})
export class HomeModule { }
