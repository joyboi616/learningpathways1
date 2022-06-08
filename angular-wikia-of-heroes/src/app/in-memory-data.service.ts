import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Wolverine' },
      { id: 2, name: 'Captain America' },
      { id: 3, name: 'Wonder Woman' },
      { id: 4, name: 'Raven' },
      { id: 5, name: 'Daredevil' },
      { id: 6, name: 'Batman' },
      { id: 7, name: 'Superman' },
      { id: 8, name: 'Starfire' },
      { id: 9, name: 'Magik' },
      { id: 10, name: 'Storm' },
      { id: 11, name: 'Green Lantern' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}