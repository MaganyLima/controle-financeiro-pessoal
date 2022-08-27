import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceitaslancPageRoutingModule } from './receitaslanc-routing.module';

import { ReceitaslancPage } from './receitaslanc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceitaslancPageRoutingModule
  ],
  declarations: [ReceitaslancPage]
})
export class ReceitaslancPageModule {}
