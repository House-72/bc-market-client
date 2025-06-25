import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories = [
    { id: 'all', name: 'All Items' },
    { id: 'weapons', name: 'Weapons' },
    { id: 'armor', name: 'Armor' },
    { id: 'potions', name: 'Potions' },
    { id: 'materials', name: 'Materials' },
    { id: 'rare', name: 'Rare Items' }
  ];

  selectedCategory: string = 'all';

  @Output() categorySelected = new EventEmitter<string>();

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.categorySelected.emit(category);
  }
}
