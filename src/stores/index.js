import React from "react";
import noteStore from "./noteStore";
import userStore from "./userStore";

// create rootStore, for communicate with each other store
class RootStore {
  constructor() {
    this.userStore = new userStore(this);
    this.noteStore = new noteStore(this);
  }
}

// Expose stores from context
const StoresContext = React.createContext(new RootStore());

// custom hooks available for the app to connect to the stores
export const useStores = () => React.useContext(StoresContext);