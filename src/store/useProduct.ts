import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IUseProduct {
    searchValue: string;
    sortValue: string;
    limit: number;
    offset: number;
    currentPage: number;
    setCurrentPage: (value: number) => void; 
    setOffset: (value: number) => void;
    setSearchValue: (val: string) => void;
    setSortValue: (val: string) => void;
}

export const useProduct = create<IUseProduct>()(devtools((set) => ({
    searchValue: '',
    sortValue: '',
    limit: 9,
    offset: 0,
    currentPage: 1,
    setCurrentPage: (value) => set({ currentPage: value }), 
    setOffset: (value) => set({ offset: value }), 
    setSearchValue: (val) => set({ searchValue: val }),
    setSortValue: (val) => set({ sortValue: val }),
})))