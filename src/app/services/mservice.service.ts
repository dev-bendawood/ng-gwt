/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MserviceService {

  constructor() { }
}
*/

import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class mService {
  //private baseUrl = 'http://localhost2/AAS';
  //private baseUrl = 'http://10.0.0.101/AAS';
  private baseUrl = 'http://aas.bendawood.com';

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('afile', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/EmploymentForms/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  saveApplication(application: any): Observable<HttpEvent<any>> {
    const req = new HttpRequest('POST', `${this.baseUrl}/EmploymentForms/SaveXhrV2`, application, {
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getIpAddress(): Observable<HttpEvent<any>> {
    const req = new HttpRequest('GET', `http://api.ipify.org/?format=json`, { format: 'json' }, {
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getCustomers(): Observable<HttpEvent<any>> {
    const req = new HttpRequest('GET', `http://usae.edu.ps/test-api/customers.json`, { v: '1.0' }, {
      responseType: 'json'
    });

    return this.http.request(req);
  }
  //
  /* getFiles(): Observable<any> {
     return this.http.get(`${this.baseUrl}/files`);
   }*/
}