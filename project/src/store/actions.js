import { createAction } from '@reduxjs/toolkit';

// tickets amount
export const addTickets = createAction('addTickets');
export const resetTickets = createAction('resetTickets');

// sort action
export const chooseSort = createAction('chooseSort');

// filters actions
export const toggleFilterCriteris = createAction('toggleFilterCriteris');
export const resetFilters = createAction('resetFilters');

//priceFilters actions
export const setMaxPrice = createAction('setMaxPrice');
export const setMinPrice = createAction('setMinPrice');

export const toggleAirlinesFilters = createAction('toggleAirlinesFilters');
