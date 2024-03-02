import { Component } from '@angular/core';
import { FetchService } from './service/fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ServiceInAngular';

  usersData : any;

  constructor (private fetch:FetchService) {
    this.fetch.fetchData().subscribe((user:any)=>
    {
      this.usersData=user.data
    })
  }
}
