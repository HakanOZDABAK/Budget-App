import { create } from "zustand";

type ITheme = {
    themeStatus: boolean;
    setThemeStatus: any;
  };
  
  export const useThemeStore = create<ITheme>(set => ({
    themeStatus: true,
    setThemeStatus: (themeStatus = false) => set(() => ({themeStatus})),
  }));
  