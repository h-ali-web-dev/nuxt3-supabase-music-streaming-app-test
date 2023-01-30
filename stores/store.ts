import { defineStore } from "pinia"
export const usePiniaStore = defineStore('musicStore', {
    state: () => ({
        loggedInState: false,
        audioName: "",
        audioTitle: ""
    }),
    getters: {
        logState: (state) => state.loggedInState,
        currentAudio: (state) => state.audioName,
        currentTitle: (state) => state.audioTitle
    },
    actions: {
        setLoggedInState (value: boolean) {
            this.loggedInState = value;
        },
        setAudio (Name: string, Title: string) {
            this.audioName = Name;
            this.audioTitle = Title;
        }
    }
})