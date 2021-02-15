import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private list: Hero[] = [
    { id: 1, name: "Batman", superPower: "Rich", address: "Gotham" },
    { id: 2, name: "Superman", superPower: "Strong", address: "Smallville" },
    { id: 3, name: "Supergirl", superPower: "Smart", address: "Wasinghton" },
    { id: 4, name: "Daredevil", superPower: "Fast", address: "New York" },
    { id: 5, name: "Hulk", superPower: "Indestructible", address: "Planet" },
  ]

  list$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);

  constructor() { }

  getAll(): void {
    this.list$.next(this.list);
  }
}
