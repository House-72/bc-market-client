export interface GameItem {
  name: string;
  category: string;
  icon: string;
  currentPrice: number;
  change: number;
  volume: number;
  listings: number;
  trend: 'up' | 'down' | 'flat';
}
