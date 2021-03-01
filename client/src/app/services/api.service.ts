import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export interface IResponse {
  data: any
  isSuccess: boolean
  message: string
  statusCode: number
}

@Injectable({
  providedIn: 'root'
})


export class ApiService {
  baseURL: string = 'http://localhost:5000/';

  constructor(
    private __httpClient: HttpClient
  ) { }

  request(method: string, route: string, data = {}) {
    const requestOptions = {
      headers: this.getHeaders(),
      // // method: endpoint.method,
      body: data,
      // search: this.getQueryParams(params)
    };

    let path = this.baseURL + '' + route;
    return this.__httpClient.request(method, path, requestOptions)
  }

  private getHeaders(): HttpHeaders {
    // const token = this.appStorage.get('auth_token');
    let requestHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    // if (token && !requestHeaders.has('Authorization')) {
    //   requestHeaders = requestHeaders.append('Authorization', 'Token ' + token);
    // }
    return requestHeaders;
  }
}
