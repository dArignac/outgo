import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let expenses = [
      {id:1, date:'2016-08-21', value: 1.29, location: 'Edeka', category: 'Food'}
    ];
    return { expenses };
  }
}