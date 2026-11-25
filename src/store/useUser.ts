import { create } from "zustand";
import type { IUser } from "../types";
import { devtools } from "zustand/middleware";

interface IUseUser {
    user: null | IUser;
    setUser: (data: IUser) => void; 
}

export const useUser = create<IUseUser>()(devtools((set) => ({
    user: null,
    setUser: (data) => set({ user: data })
})))