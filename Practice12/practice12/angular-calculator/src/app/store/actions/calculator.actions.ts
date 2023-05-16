import { createAction, props } from '@ngrx/store';

export const display = createAction(
  '[Calculator Component] Display',
  props<{ number: string }>()
);

export const clear = createAction(
  '[Calculator Component] Clear'
);

export const calculate = createAction(
  '[Calculator Component] Calculate'
);
