import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  public appPages = [
    {
      title:'Tab1',
      url: '/app/user/tabs/tab1',
      icon: 'Home'
    },
    {
      title:'Tab2',
      url: '/app/user/tabs/tab2',
      icon:'information-circle'
    },
    {
      title:'Tab3',
      url: '/app/user/tabs/tab3',
      icon:'contacts'
    }
  ];
}
