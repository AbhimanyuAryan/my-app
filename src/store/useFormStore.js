import { create } from 'zustand';

const useFormStore = create((set) => ({
  name: '',
  age: '',
  response: null,
  setName: (name) => set({ name }),
  setAge: (age) => set({ age }),
  setResponse: (response) => set({ response }),
}));

export default useFormStore;
