import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPage = [
    {
      title: 'Home',
      url: '',
      icon: 'home'
    },
    {
      title: 'Basic Info',
      url: '/cVitae',
      icon: 'list-box'
    },
    {
      title: 'Tech Skills',
      url: '/techskills',
      icon: 'laptop'
    },
    {
      title: 'Soft Skills',
      url: '/softskills',
      icon: 'briefcase'
    },
    {
      title: 'Project Work',
      url: '/pWorks',
      icon: 'code-working'
    },
    {
      title: 'Hobbies, Interests',
      url: '/hobbies',
      icon: 'happy'
    },
    {
      title: 'Contact',
      url: '/contact',
      icon: 'contact'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'information-circle'
    }
  ];

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
}
