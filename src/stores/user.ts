import { create } from "zustand";

type UserStore = {
  user?: {};
};

export const useUserStore = create<UserStore>(() => ({
  user: undefined,
}));
