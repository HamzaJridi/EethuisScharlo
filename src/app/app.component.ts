import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  public ngOnInit() {
    this.getData();
  }

  public getSalesDataByPeriode() {
    return this.http.get('/api');
  }

  public getData() {
    this.getSalesDataByPeriode().subscribe((data) => {
      console.log('************************ data on /api ', data);
    });
  }
}
