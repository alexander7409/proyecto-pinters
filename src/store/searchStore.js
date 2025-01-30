import {create} from 'zustand';
 
const useSearchStore = create((set) => ({
    searchTerm: 'car',
    saved: 'inicio',
    setSearchTerm: (term) => set({ searchTerm: term }),
    setSaved: (saved) => set({ saved }),
}));
 
export default useSearchStore;
 