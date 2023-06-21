import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamoRoutingModule } from './reclamo-routing.module';
import { AllreclamosComponent } from './pages/allreclamos/allreclamos.component';
import { ReclamosmapComponent } from './pages/reclamosmap/reclamosmap.component';
import { SharedModule } from '../shared/shared.module';
import { VistasReclamoComponent } from './vistas-reclamo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllreclamosComponent,
    ReclamosmapComponent,
    VistasReclamoComponent
  ],
  imports: [
    CommonModule,
    ReclamoRoutingModule,
    FormsModule,
    SharedModule,
  ]
})
export class ReclamoModule { }
