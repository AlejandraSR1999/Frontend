import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer
  } from '@ngrx/store';
  import { calculatorReducer } from './reducers/calculator.reducer';
  
  export interface State {
    calculator: string;
  }
  
  export const reducers: ActionReducerMap<State> = {
    calculator: calculatorReducer,
  };
  
  
  