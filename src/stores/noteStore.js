import { makeAutoObservable } from "mobx";

class noteStore {
    notes = [];

    constructor(rootStore) {
        this.rootStore = rootStore;
        makeAutoObservable(this);
    }

    addNote(note) {
        let send_note = { note };

        // check if name is available on userStore
        if (this.rootStore.userStore.name) {
            send_note.username = this.rootStore.userStore.name;
        }

        this.notes.push(send_note);

    }
}

export default noteStore;