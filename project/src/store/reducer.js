import { createReducer } from '@reduxjs/toolkit';
import { SORTS } from '../consts/sorts';
import {
  addTickets,
  chooseSort,
  resetFilters,
  resetTickets,
  toggleFilterCriteris,
  toggleAirlinesFilters,
  setMaxPrice,
  setMinPrice,
} from './actions';

const initialState = {
  maxTickets: 3,
  choosenSort: SORTS.UP,
  choosenTransferOptions: [],
  maxPrice: 1000000,
  minPrice: 0,
  choosenAirlines: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTickets, (state) => {
      state.maxTickets += 5;
    })
    .addCase(chooseSort, (state, action) => {
      state.choosenSort = action.payload;
    })
    .addCase(resetTickets, (state) => {
      state.maxTickets = 5;
    })
    .addCase(toggleFilterCriteris, (state, action) => {
      state.choosenTransferOptions = state.choosenTransferOptions.includes(
        action.payload
      )
        ? state.choosenTransferOptions.filter(
            (filter) => filter !== action.payload
          )
        : [...state.choosenTransferOptions, action.payload];
    })
    .addCase(resetFilters)
    .addCase(setMaxPrice, (state, action) => {
      state.maxPrice = action.payload;
    })
    .addCase(setMinPrice, (state, action) => {
      state.minPrice = action.payload;
    })
    .addCase(toggleAirlinesFilters, (state, action) => {
      state.choosenAirlines = state.choosenAirlines.includes(action.payload)
        ? state.choosenAirlines.filter((filter) => filter !== action.payload)
        : [...state.choosenAirlines, action.payload];
    });
});

export { reducer };
