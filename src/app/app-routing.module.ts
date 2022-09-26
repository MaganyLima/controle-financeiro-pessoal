import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'lancar',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'lancamentos',
    loadChildren: () => import('./lancamentos/lancamentos.module').then( m => m.LancamentosPageModule)
  },
  {
    path: 'lancar',
    loadChildren: () => import('./lancar/lancar.module').then( m => m.LancarPageModule)
  },
  {
    path: 'despesaslanc',
    loadChildren: () => import('./despesaslanc/despesaslanc.module').then( m => m.DespesaslancPageModule)
  },
  {
    path: 'receitaslanc',
    loadChildren: () => import('./receitaslanc/receitaslanc.module').then( m => m.ReceitaslancPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
