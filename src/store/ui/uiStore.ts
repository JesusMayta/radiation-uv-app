import { create } from 'zustand';

interface State {

    //* Properties
    isSideMenuOpen: boolean;
    isOpenModalMed: boolean;

    //* Actions
    openSideMenu: () => void;
    closeSideMenu: () => void;

    openModalMed: () => void;
    closeModalMed: () => void;
};

export const useUiStore = create<State>()((set) => ({
    isSideMenuOpen: false,
    isOpenModalMed: false,

    openSideMenu: () => set({ isSideMenuOpen: true }),
    closeSideMenu: () => set({ isSideMenuOpen: false }),

    openModalMed: () => set({ isOpenModalMed: true }),
    closeModalMed: () => set({ isOpenModalMed: false }),
}));