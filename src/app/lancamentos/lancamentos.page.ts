import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.page.html',
  styleUrls: ['./lancamentos.page.scss'],
})
export class LancamentosPage implements OnInit {
  public tdsLancamentos: Array<any>=[];

  constructor( public navCtrl: NavController, private http: HttpClient) {
  }

ngOnInit() {
  this.atualizalancamentos();
 }

atualizalancamentos(){
  this.tdsLancamentos=[];
  this.http.get<any[]>()
  .subscribe( valor => {
    valor.forEach( dados => {
      this.tdsLancamentos.push([dados.lancamento,dados.categoria,dados.descricao,dados.valor]);
    });
  });

}
inicio(){
  this.navCtrl.navigateRoot('inicio');
}

adicionar(){
  this.navCtrl.navigateRoot('lancar');
}

}
