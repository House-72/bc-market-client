import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CategoryComponent } from './components/category/category.component';
import { StatsBarComponent } from './components/stats-bar/stats-bar.component';
import { ItemOverviewComponent } from './components/item-overview/item-overview.component';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        NavigationComponent,
        SearchBarComponent,
        CategoryComponent,
        StatsBarComponent,
        ItemOverviewComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bc-market-client';
  searchQuery: string = '';
  selectedCategory: string = 'all';

  onSearch(query: string): void {
    this.searchQuery = query;
  }

  onCategorySelected(category: string): void {
    this.selectedCategory = category;
  }
}
