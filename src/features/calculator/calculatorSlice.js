import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  historyStack: []
};
export const calculatorSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    updateHistory: (state, action) => {
      state.historyStack.push(action.payload);
    },
    clearHistory: (state) => {
      state.historyStack = [];
    }
  },
});

export const { incrementByAmount, updateHistory, clearHistory } = calculatorSlice.actions;

export const selectCount = (state) => state.calculator.value;
export const selectHistoryStack = (state) => state.calculator.historyStack;

export default calculatorSlice.reducer;
