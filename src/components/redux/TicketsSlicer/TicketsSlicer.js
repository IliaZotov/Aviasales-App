/* eslint-disable import/no-cycle */
import { createSlice } from '@reduxjs/toolkit';
import { fetchGetId } from '../API/apiAction';

const initialState = {
  tickets: [],
  isLoading: false,
  errorMessage: '',
  id: null,
};

const ticketsSlicer = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    addTickets: (state, action) => {
      // console.log('Adding tickets:', action.payload);
      state.tickets.push(...action.payload);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetId.fulfilled, (state, action) => {
      state.isLoading = false;
      state.id = action.payload;
    });
  },
});

export const { addTickets, setLoading, setError } = ticketsSlicer.actions;
export default ticketsSlicer.reducer;
