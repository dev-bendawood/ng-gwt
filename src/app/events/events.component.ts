import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { mservice } from '../services/mservice.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  customers: any;
  constructor(private mservice: mservice) { }

  getCustomers() {
    this.mservice.getCustomers().subscribe(
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

  ngOnInit(): void {
    this.getCustomers();
  }

}
