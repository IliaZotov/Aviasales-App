import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tabs: [
    { label: 'Самый Дешевый', name: 'cheap', isActive: true },
    { label: 'Самый Быстрый', name: 'fast', isActive: false },
    { label: 'Оптимальный', name: 'optimal', isActive: false },
  ],
};

const tabsSlicer = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    changeTab: (state, action) => {
      const tabName = action.payload;
      state.tabs = state.tabs.map((tab) =>
        tab.name === tabName
          ? { ...tab, isActive: true }
          : { ...tab, isActive: false },
      );
    },
  },
});

export const { changeTab } = tabsSlicer.actions;
export default tabsSlicer.reducer;
