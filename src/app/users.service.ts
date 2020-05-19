import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  activeUsers = ['Claire', 'Jamie'];
  inactiveUsers = ['John', 'Brianna'];

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]); // add to active list
    this.inactiveUsers.splice(id, 1); // remove from inactive list
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]); // add to inactive list
    this.activeUsers.splice(id, 1); // remove from active list
  }

  constructor() { }
}
