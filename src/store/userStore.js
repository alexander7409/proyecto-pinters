import {create} from 'zustand';
import { auth } from '@/firebase/config';
 
const useUserStore = create((set) => ({
  user: false,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  initializeUser: () => {
    auth.onAuthStateChanged((user) => {
      if(user){
        set({ user });
      }else{
        set({ user: null });
      }
    })
  }
}));
 
export default useUserStore;
 
