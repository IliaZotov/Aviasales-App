import { createAsyncThunk } from '@reduxjs/toolkit';
/* eslint-disable import/no-cycle */
import {
  addTickets,
  setLoading,
  setError,
} from '../TicketsSlicer/TicketsSlicer';

export const fetchGetId = createAsyncThunk(
  'fetchGetId',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const idUrl = 'https://aviasales-test-api.kata.academy/search';
      const res = await fetch(idUrl);

      if (!res.ok) {
        throw new Error('Fetch Id is failed');
      }

      const jsonData = await res.json();
      return jsonData.searchId;
    } catch (error) {
      if (error.message === 'FetchId is failed') {
        dispatch(setError(error.message));
        return rejectWithValue(error.message);
      }
      return rejectWithValue('An unexpected error occurred');
    }
  },
);

export const fetchGetTickets = createAsyncThunk(
  'fetchGetTickets',
  async (id, { dispatch, rejectWithValue }) => {
    dispatch(setLoading(true));
    try {
      const ticketsUrl = `https://aviasales-test-api.kata.academy/tickets?searchId=${id}`;
      const res = await fetch(ticketsUrl);

      if (!res.ok) {
        throw new Error('Fetch Tickets is failed');
      }

      const jsonData = await res.json();

      if (!jsonData.stop) {
        dispatch(addTickets(jsonData.tickets));
        await dispatch(fetchGetTickets(id));
      } else {
        dispatch(setLoading(false));
      }
      return jsonData;
    } catch (error) {
      if (error.message === 'Fetch Tickets is failed') {
        await dispatch(fetchGetTickets(id));
      }

      return rejectWithValue(error.message);
    }
  },
);
