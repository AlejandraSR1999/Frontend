import { createSlice } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: "",
  reducers: {
    addInput: (state, action) => state + action.payload,
    resetInput: () => "",
    calculateResult: (state) => {
      try {
        // Asegúrate de manejar errores aquí, ya que eval puede ser peligroso
        return eval(state).toString();
      } catch (err) {
        return "Error";
      }
    },
  },
});

export const { addInput, resetInput, calculateResult } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
