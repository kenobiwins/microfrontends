import { makeAutoObservable } from "mobx";

class SupportStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}

export const supportStore = new SupportStore();
