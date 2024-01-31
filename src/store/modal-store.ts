import { User } from '@/types/types';
import {create} from 'zustand';

interface ModalState {
  isModalOpen: boolean;
}

interface ModalActions {
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
}

type ModalStore = ModalState & ModalActions;

export const useModalStore = create<ModalStore>((set) => ({
  isModalOpen: false,

  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  toggleModal: () => set((state) => ({ isModalOpen: !state.isModalOpen })),
}));


interface UserState {
  user: User | null;
  setUser: (user: UserState['user']) => void
  logout: () => void
}
export const useUserStore = create<UserState>((set) =>  ({
  user: null,
  setUser: (loggedUser) => set({ user: loggedUser }),
  logout: () => set({ user: null })
}))
