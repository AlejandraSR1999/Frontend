import { createReducer, on } from '@ngrx/store';
import { display, clear, calculate } from '../actions/calculator.actions';

export const initialState = '';

export const calculatorReducer = createReducer(
  initialState,
  on(display, (state, { number }) => state + number),
  on(clear, (state) => ''),
  on(calculate, (state) => {
    try {
      return eval(state).toString();
    } catch {
      return 'Error';
    }
  })
);
