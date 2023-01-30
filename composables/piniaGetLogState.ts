import { usePiniaStore } from "@/stores/store";
const storeS = usePiniaStore();
export const piniaGetLogState = () => {
    return storeS.logState
}