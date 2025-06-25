import { Injectable } from '@angular/core';
import { GameItem } from '../models/game-item.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameItemService {
  private gameItems: GameItem[] = [
    {
      name: "Dragon Sword",
      category: "weapons",
      icon: "⚔️",
      currentPrice: 1247,
      change: 2.4,
      volume: 1423,
      listings: 47,
      trend: "up"
    },
    {
      name: "Phoenix Armor",
      category: "armor",
      icon: "🛡️",
      currentPrice: 2890,
      change: -1.2,
      volume: 892,
      listings: 23,
      trend: "down"
    },
    {
      name: "Health Potion",
      category: "potions",
      icon: "🧪",
      currentPrice: 45,
      change: 0.0,
      volume: 5647,
      listings: 234,
      trend: "flat"
    },
    {
      name: "Mithril Ore",
      category: "materials",
      icon: "💎",
      currentPrice: 156,
      change: 8.7,
      volume: 3421,
      listings: 89,
      trend: "up"
    },
    {
      name: "Shadow Cloak",
      category: "armor",
      icon: "🥷",
      currentPrice: 1876,
      change: -3.4,
      volume: 567,
      listings: 12,
      trend: "down"
    },
    {
      name: "Lightning Staff",
      category: "weapons",
      icon: "⚡",
      currentPrice: 3245,
      change: 5.2,
      volume: 234,
      listings: 8,
      trend: "up"
    },
    {
      name: "Mystic Gem",
      category: "rare",
      icon: "💜",
      currentPrice: 8942,
      change: 12.3,
      volume: 67,
      listings: 3,
      trend: "up"
    },
    {
      name: "Iron Shield",
      category: "armor",
      icon: "🛡️",
      currentPrice: 234,
      change: -0.8,
      volume: 1876,
      listings: 156,
      trend: "down"
    }
  ];

  constructor() { }

  getGameItems(): Observable<GameItem[]> {
    return of(this.gameItems);
  }

  getFilteredItems(category: string): Observable<GameItem[]> {
    if (category === 'all') {
      return of(this.gameItems);
    }
    return of(this.gameItems.filter(item => item.category === category));
  }

  searchItems(query: string): Observable<GameItem[]> {
    if (!query) {
      return of(this.gameItems);
    }
    return of(this.gameItems.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    ));
  }

  getMarketStats() {
    return {
      activeItems: 1247,
      totalTradesToday: 48392,
      goldVolume: '2.3M',
      marketGrowth: '15.2%'
    };
  }
}
