import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Vinny' },
      { id: 12, name: 'Kingsley' },
      { id: 13, name: 'Charles' },
      { id: 14, name: 'Somto' },
      { id: 15, name: 'Reme' },
      { id: 16, name: 'Sewa' },
      { id: 17, name: 'Thomas' },
      { id: 18, name: 'Victor' },
      { id: 19, name: 'Kelechi' },
      { id: 20, name: 'Nonso' },
    ];
    return {heroes};
  }
}
