import { create } from "zustand";

type UseToggleMenu = {
  isToggled: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
};

const useToggleMenu = create<UseToggleMenu>((set) => ({
  isToggled: false,
  toggle: () =>
    set((state) => ({
      ...state,
      isToggled: !state.isToggled,
    })),
  open: () => set({ isToggled: true }),
  close: () => set({ isToggled: false }),
}));

export default useToggleMenu;
