import { create } from "zustand";

type IDataStore = {
    allData: any;
    setAllData: (data: any) => void; // Add the missing setData property
}

export const useDataStore = create<IDataStore>(set => {
    return {
        allData: [],
        setAllData: (allData: any) => set(() => ({ allData }))
    }
})