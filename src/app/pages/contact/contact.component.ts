import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../providers/api-calls.service';
import { NotificationService } from '../../providers/notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public comment = {};
  constructor(
    private apiCallsService: ApiCallsService,
    private notificationService: NotificationService)
  {
  }

  ngOnInit() {
  }
  public sendComments() {
    if (!this.comment['name'] || !this.comment['email'] || !this.comment['message'] || !this.comment['subject']) {
      return;
    }
    this.apiCallsService.postData('contact', this.comment).subscribe(
      (data) => {
        this.notificationService.notification.next({
          msgType: 'success',
          msgTitle: 'E-mail verzonden',
          msgContent: 'Uw e-mail was, met succes, verzonden.',
        });
        this.comment['name'] = null;
        this.comment['email'] = null;
        this.comment['message'] = null;
        this.comment['subject'] = null;
      },
      (error) => {
        this.notificationService.notification.next({
          msgType: 'error',
          msgTitle: 'E-mail mislukt',
          msgContent: 'Uw e-mail is niet verzonden. Probeer het later nog eens.',
        });
      }
    );
  }
}
