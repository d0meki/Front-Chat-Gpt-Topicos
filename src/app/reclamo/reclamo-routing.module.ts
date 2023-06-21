import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VistasReclamoComponent } from './vistas-reclamo.component';
import { AllreclamosComponent } from './pages/allreclamos/allreclamos.component';

// const routes: Routes = [];

const routes: Routes = [
  {
    path: 'dashboard', component: VistasReclamoComponent, children: [
      { path: '', redirectTo: 'allreclamos', pathMatch: 'full' },
      { path: 'allreclamos', component: AllreclamosComponent },
       { path: '**', redirectTo: 'allreclamos', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamoRoutingModule { }
