import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { mService } from '../services/mservice.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styles: [``]
})
export class CustomersComponent implements OnInit  {
  customers: any;
 
  constructor(private mService: mService) { }

  getCustomers() {
    this.mService.getCustomers().subscribe(
      (event: any) => {
        if (event instanceof HttpResponse) {
          this.customers=event.body.items;
          //console.log(customers)
          //console.log('http-response: ', event);
        }
      },
      (err: any) => {
        console.log('error:', err);
      });
      
  }
 
  ngOnInit() {
    this.getCustomers();
  }
}