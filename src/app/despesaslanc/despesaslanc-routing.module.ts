import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DespesaslancPage } from './despesaslanc.page';

const routes: Routes = [
  {
    path: '',
    component: DespesaslancPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DespesaslancPageRoutingModule {}
