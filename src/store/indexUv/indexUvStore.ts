import { create } from 'zustand';

interface State {

    //* Properties
    indexUvInStore: number;

    //* Actions
    saveIndexUv: (indexValue: number) => void;
};

export const useIndexUvStore = create<State>()((set) => ({
    indexUvInStore: 0,

    saveIndexUv: (indexValue: number) => set({ indexUvInStore: indexValue }),
}));