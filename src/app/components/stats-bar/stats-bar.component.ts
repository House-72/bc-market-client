import { Component, OnInit } from '@angular/core';
import { GameItemService } from '../../services/game-item.service';

@Component({
  selector: 'app-stats-bar',
  standalone: true,
  imports: [],
  templateUrl: './stats-bar.component.html',
  styleUrl: './stats-bar.component.css'
})
export class StatsBarComponent implements OnInit {
  stats: {
    activeItems: number;
    totalTradesToday: number;
    goldVolume: string;
    marketGrowth: string;
  } = {
    activeItems: 0,
    totalTradesToday: 0,
    goldVolume: '',
    marketGrowth: ''
  };

  constructor(private gameItemService: GameItemService) {}

  ngOnInit(): void {
    this.stats = this.gameItemService.getMarketStats();
  }
}
