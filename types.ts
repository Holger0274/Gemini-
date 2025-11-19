export interface NavLink {
  name: string;
  href: string;
}

export interface UseCase {
  id: number;
  title: string;
  category: string;
  status: 'In Entwicklung' | 'Konzeptphase' | 'PoC';
  roi: string;
  stack: string;
  timeframe: string;
}

export interface TrainingModule {
  title: string;
  description: string;
  details: string[];
}
