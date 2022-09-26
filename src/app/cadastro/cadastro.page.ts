import { LancamentosPage } from './../lancamentos/lancamentos.page';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  nome='';
  email='';
  senha='';

  constructor(
    public navCtrl: NavController, private http: HttpClient
  ) { }

  ngOnInit() {

  }

  async cadastrar(){
    this.navCtrl.navigateRoot('login');
    this.http.post<any[]>(
    {nome : this.nome, email : this.email, senha: this.senha})
    .subscribe(valor =>{});
  }

}

