import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ProgressionmasterService {
  public excercises: any;
  public stats: any;

  baseUrl = 'https://progressionmaster-21007-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http: HttpClient) { }

  initialize()
  {
    this.getExcercises().then(data => this.excercises = _.sortBy(data, 'Target'));
    this.getStats().then(data => this.stats = data);
    

  }


  getExcercises()
  {
    let requestUrl = `${this.baseUrl}/Excercises.json`;
    return this.http.get(requestUrl).toPromise();
  }

  getStats() {
    let requestUrl = `${this.baseUrl}/Stats.json`;
    return this.http.get(requestUrl).toPromise();
    }
}

