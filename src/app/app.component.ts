import { Component } from '@angular/core';
import { LogUpdateService } from './service/log-update.service';
import { PushNotificationService } from './service/push-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pwa ';

  constructor(private logUpdate: LogUpdateService, private pushService: PushNotificationService) {


  }

  ngOnInit() {

    this.logUpdate.subscribe();
    this.pushService.subscribeToNotifications();
    this.pushService.listenForNotifications();
  }
}
