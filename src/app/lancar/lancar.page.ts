import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lancar',
  templateUrl: './lancar.page.html',
  styleUrls: ['./lancar.page.scss'],
})
export class LancarPage implements OnInit {


  constructor(
    public navCtrl: NavController,private http: HttpClient,public rout: Router
  ) { }

  ngOnInit() {
  }

  inicio(){
    this.navCtrl.navigateRoot('inicio');
    //this.rout.navigate(['inicio']);
  }
  lancamento(){
    this.navCtrl.navigateRoot('lancamentos');
  }
}

