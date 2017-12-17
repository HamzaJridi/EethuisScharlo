import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

// const baseUrl = (process.env.NODE_ENV === 'production') ? '/eethuisshcarlo/' : '/';
// const apiPort = (process.env.NODE_ENV === 'development') ? ':3000' : '';

@Injectable()
export class ApiCallsService {

  public port = (window.location.port === '3000') ? '3000' : window.location.port

  public apiUrl: any = {
  domaine: `${window.location.protocol}//${window.location.hostname}`,
  path: '/api/',
  port: this.port
};
  public rootUrl = `${this.apiUrl.domaine}:${this.apiUrl.port}${this.apiUrl.path}`;

  constructor(private httpClient: HttpClient) {
    console.log('*****************************************************************************');
    console.log('*****************************************************************************');
    console.log('*****************************************************************************');
    console.log('**************************************************** this.apiUrl', this.apiUrl.domaine);
    console.log('*************************************************** this.apiUrl', this.apiUrl.path);
    console.log('*************************************************** this.apiUrl', this.apiUrl.port);
    console.log('*****************************************************************************');
    console.log('*****************************************************************************');
    console.log('*****************************************************************************');
  }

  public getData(url) {
    return this.httpClient.get(`${this.rootUrl}${url}`);
    // return this.httpClient.get('../assets/data/menu.json');
  }

  public postData(url, data) {
    return this.httpClient.post(`${this.rootUrl}${url}`, data);
  }
}
