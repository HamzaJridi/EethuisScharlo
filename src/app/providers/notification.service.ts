import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ToastyService, ToastyConfig, ToastOptions, ToastData } from 'ng2-toasty';

@Injectable()
export class NotificationService {
  public notification = new Subject();

  constructor(private toastyService: ToastyService,
              private toastyConfig: ToastyConfig) {
    this.toastyConfig.theme = 'material';
    this.notification.subscribe(
      (data: any) => {
        console.log('******** NOTIFICATION data', data);
        const NotifType = data.msgType.toLocaleLowerCase();
        const toastOptions: ToastOptions = {
          title: data.msgTitle,
          msg: data.msgContent,
          showClose: true,
          timeout: data.delay || 3000,
          theme: 'material',
          onAdd: (toast: ToastData) => {
            // delete previous toast instance
            // const prevToast = toast.id - 1;
            // if (prevToast > 0) {
            //   this.toastyService.clear(prevToast);
            // }
          }
        };
        // display notification based on its type
        switch (NotifType) {
          case 'info':
            this.toastyService.info(toastOptions);
            break;
          case 'success':
            this.toastyService.success(toastOptions);
            break;
          case 'wait':
            this.toastyService.wait(toastOptions);
            break;
          case 'error':
            this.toastyService.error(toastOptions);
            break;
          case 'warning':
            this.toastyService.warning(toastOptions);
            break;
          default:
            this.toastyService.info(toastOptions);
        }
      }
    );
  }

}
