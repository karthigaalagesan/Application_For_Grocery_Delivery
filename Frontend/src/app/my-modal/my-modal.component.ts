import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
  styleUrls: ['./my-modal.component.css']
})
export class MyModalComponent {
  modal:boolean=true

  closeResult:string;

  constructor(private modalService: ModalService) {}


  openModal(contain) {
    this.modalService.open(MyModalComponent);
  }

  closeModal(){
    

  }

}
