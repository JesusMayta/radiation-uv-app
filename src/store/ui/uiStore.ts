import { create } from 'zustand';

interface State {

    //* Properties
    isSideMenuOpen: boolean;

    //* Actions
    openSideMenu: () => void;
    closeSideMenu: () => void;
};

export const useUiStore = create<State>()((set) => ({
    isSideMenuOpen: false,

    openSideMenu: () => set({ isSideMenuOpen: true }),
    closeSideMenu: () => set({ isSideMenuOpen: false }),
}));