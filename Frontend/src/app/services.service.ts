import { Injectable } from '@angular/core';
import{BehaviorSubject }from'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  public messageSource= new BehaviorSubject('Default Message')
  //


  constructor() { }
  currentValue=this.messageSource.asObservable

  changeMessage(message:any){
    this.messageSource.next(message)
  }

  
}
