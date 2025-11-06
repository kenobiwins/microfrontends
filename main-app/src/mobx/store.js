import { makeAutoObservable } from "mobx";

class MainStore {
  user = "Admin";

  constructor() {
    makeAutoObservable(this);
  }

  setUser(name) {
    this.user = name;
  }
}

export const mainStore = new MainStore();
