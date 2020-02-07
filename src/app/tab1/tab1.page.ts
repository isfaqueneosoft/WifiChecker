import { Component } from '@angular/core';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  wifilist = [];
  constructor(private hotspot: Hotspot) {}

  ngOnInit(){

    this.hotspot.scanWifi().then((networks: HotspotNetwork[]) => {
      console.log(networks);
      this.wifilist = networks;
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.hotspot.scanWifi().then((networks: HotspotNetwork[]) => {
      console.log(networks);
      this.wifilist = networks;
      event.target.complete();
    });
  }

}
