import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiCardComponent } from './site/multi-card/multi-card.component';

const routes: Routes = [
  { path: 'card', component: MultiCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
  
 
}