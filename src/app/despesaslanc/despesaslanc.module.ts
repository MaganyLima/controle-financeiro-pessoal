import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DespesaslancPageRoutingModule } from './despesaslanc-routing.module';

import { DespesaslancPage } from './despesaslanc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DespesaslancPageRoutingModule
  ],
  declarations: [DespesaslancPage]
})
export class DespesaslancPageModule {}
