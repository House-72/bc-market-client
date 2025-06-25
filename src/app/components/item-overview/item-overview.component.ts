import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameItem } from '../../models/game-item.model';
import { GameItemService } from '../../services/game-item.service';

@Component({
  selector: 'app-item-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-overview.component.html',
  styleUrl: './item-overview.component.css'
})
export class ItemOverviewComponent implements OnChanges {
  @Input() searchQuery: string = '';
  @Input() selectedCategory: string = 'all';

  items: GameItem[] = [];

  constructor(private gameItemService: GameItemService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.loadItems();
  }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    let filteredItems: GameItem[] = [];

    this.gameItemService.getFilteredItems(this.selectedCategory).subscribe(items => {
      filteredItems = items;

      if (this.searchQuery) {
        filteredItems = filteredItems.filter(item =>
          item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }

      this.items = filteredItems;
    });
  }

  formatPrice(price: number): string {
    if (price >= 1000000) return (price / 1000000).toFixed(1) + 'M';
    if (price >= 1000) return (price / 1000).toFixed(1) + 'K';
    return price.toString();
  }

  viewChart(itemName: string): void {
    alert(`Opening chart for ${itemName}...`);
    // In a real implementation: window.location.href = `/chart/${itemName}`;
  }
}
