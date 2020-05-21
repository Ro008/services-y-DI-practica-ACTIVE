import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToInactiveList() {
    this.activeToInactiveCounter++;
    console.log('Number of times an inactive user has changed to active: ' + this.activeToInactiveCounter);
  }

  incrementInactiveToActiveList() {
    this.inactiveToActiveCounter++;
    console.log('Number of times an active user has changed to inactive: ' + this.inactiveToActiveCounter);
  }

  constructor() { }
}
