import { usePiniaStore } from "@/stores/store";
const storeS = usePiniaStore();
export const piniaState = (state: boolean) => {
    storeS.setLoggedInState(state)
}