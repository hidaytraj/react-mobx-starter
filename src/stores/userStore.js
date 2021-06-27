import { makeAutoObservable } from "mobx";

class userStore {
  name = "John doe";

  constructor() {
    makeAutoObservable(this);
  }

  setUserName = (name) => {
    this.name = name;
  };
}

export default userStore;