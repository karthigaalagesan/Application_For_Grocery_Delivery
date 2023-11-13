import { Component } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {

  todos:any[]=[]

  submit(item:string){ 
  
    this.todos.push({id:this.todos.length,name:item})
    console.log(this.todos)

  }
  removeTodo(id:number){
  this.todos=this.todos.filter(item=>item.id!==id)


  }

}
