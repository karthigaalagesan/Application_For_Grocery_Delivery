import { Component,OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  message:string="";
  subscription:Subscription

  constructor(private data:ServicesService){}

 
  ngOnInit(): void {
    // this.subscription= this.data.currentValue.subscribe(message =>(this.message=message))
  }

}
