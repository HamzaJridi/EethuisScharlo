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
    port: ':8080' + '/'
  };
  public rootUrl = this.apiUrl.domaine + this.apiUrl.port + this.apiUrl.path;

  constructor(private httpClient: HttpClient) { }

  public getData(url) {
    return this.httpClient.get(`${this.rootUrl}${url}`);
    // return this.httpClient.get('../assets/data/menu.json');
  }

  public postData(url, data) {
    console.log('*****************************************************************************');
    console.log('*****************************************************************************');
    console.log('*****************************************************************************');
    console.log('**************************************************** this.apiUrl', this.apiUrl.domaine);
    console.log('*************************************************** this.apiUrl', this.apiUrl.path);
    console.log('*************************************************** this.apiUrl', this.apiUrl.port);
    console.log('*****************************************************************************');
    console.log('*****************************************************************************');
    console.log('*****************************************************************************');
    return this.httpClient.post(`${this.rootUrl}${url}`, data);
  }
}
