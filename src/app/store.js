import { configureStore } from '@reduxjs/toolkit';
import  summary  from './summarySlice'
import filter from './filterSlice'

export const store = configureStore({
  reducer: {summary, filter},
  devTools: process.env.NODE_ENV !== 'production'
});
