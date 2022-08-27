import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitaslancPage } from './receitaslanc.page';

const routes: Routes = [
  {
    path: '',
    component: ReceitaslancPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceitaslancPageRoutingModule {}
