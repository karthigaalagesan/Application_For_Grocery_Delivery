import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  
currentPage: number = 1;
itemsPerPage: number = 10;

  items: any[] = [
    { id: 1, name: 'Item 1', class:'4th' },
    { id: 2, name: 'Item 2', class:'4th' },
    { id: 3, name: 'Item 3', class:'4th' },
    { id: 4, name: 'Item 4', class:'4th' },
    { id: 5, name: 'Item 5', class:'4th' },
    { id: 6, name: 'Item 6', class:'4th' },
    { id: 7, name: 'Item 7', class:'4th' },
    { id: 8, name: 'Item 8', class:'4th' },
    { id: 9, name: 'Item 9', class:'4th' },
    { id: 10, name: 'Item 10', class:'4th' },
    { id: 11, name: 'Item 11', class:'4th' },
    { id: 12, name: 'Item 12', class:'4th' },
    { id: 13, name: 'Item 13', class:'4th' },
    { id: 14, name: 'Item 14', class:'4th' },
    { id: 15, name: 'Item 15', class:'4th' },
    { id: 16, name: 'Item 16', class:'4th' },
    { id: 17, name: 'Item 17', class:'4th' },
    { id: 18, name: 'Item 18', class:'4th' },
    { id: 19, name: 'Item 19', class:'4th' },
    { id: 20, name: 'Item 20', class:'4th' },
    { id: 21, name: 'Item 21', class:'4th' },
    { id: 22, name: 'Item 22', class:'4th' },
    { id: 23, name: 'Item 23', class:'4th' },
    { id: 24, name: 'Item 24', class:'4th' },
    { id: 25, name: 'Item 25', class:'4th' },
    { id: 26, name: 'Item 26', class:'4th' },
    { id: 27, name: 'Item 27', class:'4th' },
    { id: 28, name: 'Item 28', class:'4th' },
    { id: 29, name: 'Item 29', class:'4th' },
    { id: 30, name: 'Item 30', class:'4th' },




   
   
  ];


get displayedItems(): any[] {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.items.slice(startIndex, endIndex);
}


nextPage() {
  if (this.currentPage < this.totalPages()) {
    this.currentPage++;
  }
}

previousPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
  }
}

totalPages(): number {
  return Math.ceil(this.items.length / this.itemsPerPage);
}

  

}
