import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

// const baseUrl = (process.env.NODE_ENV === 'production') ? '/eethuisshcarlo/' : '/';
// const apiPort = (process.env.NODE_ENV === 'development') ? ':3000' : '';

@Injectable()
export class ApiCallsService {

  public apiUrl: any = {
    domaine: window.location.protocol + '//' + window.location.hostname,
    path: 'api/',
    // port: apiPort + baseUrl
    port: ':3000' + '/'
  };
  public rootUrl = this.apiUrl.domaine + this.apiUrl.port + this.apiUrl.path;

  constructor(private httpClient: HttpClient) { }

  public getData(url) {
    console.log('************* url', url);
    console.log('************* apiUrl', this.apiUrl);
    console.log('************* rootUrl', this.rootUrl);
    return this.httpClient.get(`${this.rootUrl}${url}`);
    // return this.httpClient.get('../assets/data/menu.json');
  }
}
