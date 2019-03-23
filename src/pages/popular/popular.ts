import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DetailPage } from '../detail/detail';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'; 

/**
 * Generated class for the PopularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popular',
  templateUrl: 'popular.html',
})
export class PopularPage {
  popnews: any=0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get('https://www.reddit.com/r/popular/new.json?limit=20')
    .map(res => res.json())
    .subscribe(data => {
      this.popnews = data.data.children;
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopularPage');
  }
  viewDetail(item){
    this.navCtrl.push(DetailPage, {item:item});
  }

}
