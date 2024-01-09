import { AppLocaleType } from "../languages";
import { create } from "zustand";

type ILocaleStore={
  locale: keyof AppLocaleType
   setLocale:(lang:keyof AppLocaleType) => void;

}

export const useLocaleStore = create<ILocaleStore>(set =>{
    return{

        locale:'tr_TR',
        setLocale:(locale:keyof AppLocaleType) => set(()=>({locale}))
    }
})
