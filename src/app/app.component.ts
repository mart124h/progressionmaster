import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ProgressionmasterService } from './services/progressionmaster.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'Home', url: '/homepage', icon: 'home' },
    { title: 'Training Plan', url: '/training-plan', icon: 'home' },
    { title: 'Excercises', url: '/excercises', icon: 'home' }

  ];
  constructor(private platform: Platform, private btService: ProgressionmasterService) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.btService.initialize();
      });
    }

}
