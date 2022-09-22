import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { noop } from 'rxjs';

@Component({
  selector: 'app-lancar',
  templateUrl: './lancar.page.html',
  styleUrls: ['./lancar.page.scss'],
})
export class LancarPage implements OnInit {
  public tiporegistro  = false;
  public categoriaLan;
  valor='';
  descrição='';
  data='';
  categoria='';

  constructor(public navCtrl: NavController,private http: HttpClient,public rout: Router){
    this.tiporegistro=false;
    this.categoriaLan=[
      {nome:'Alimentação'},
      {nome:'Assinaturas'},
      {nome:'Casa'},
      {nome:'Compras'},
      {nome:'Cuidados pessoais'},
      {nome:'Empréstimo'},
      {nome:'Hobbies'},
      {nome:'Impostos'},
      {nome:'Investimento'},
      {nome:'Lazer'},
      {nome:'Mercado'},
      {nome:'Outras despesas'},
      {nome:'Outras receitas'},
      {nome:'Salário'},
      {nome:'Saúde'},
      {nome:'Serviços'},
      {nome:'Taxas'},
      {nome:'Trabalho'},
      {nome:'Transporte'},
    ];
  }


  ngOnInit() {
  }

  async confirmar(){
    this.navCtrl.navigateRoot('lancamentos');
    this.http.post<any[]>('http://localhost/CFP/addLancamento.php',
    {valor : this.valor, descrição : this.descrição, categoria : this.categoria, data : this.data})
    .subscribe(valor =>{});
  }

  inicio(){
    this.navCtrl.navigateRoot('inicio');
    //this.rout.navigate(['inicio']);
  }
  lancamento(){
    this.navCtrl.navigateRoot('lancamentos');
  }
}

