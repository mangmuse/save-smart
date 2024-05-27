import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  UPDATE_EXPENSE,
} from "../constants/dateConstants";
import initialExpenseData from "../data/fakedata.json";

export const initialState = {
  expenses: initialExpenseData,
};

export const expenseReducer = (state, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return { ...state, expenses: [...state.expenses, action.payload] };
    case UPDATE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.map((exp) =>
          exp.id === action.payload.id ? action.payload : exp
        ),
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter((exp) => exp.id !== action.payload),
      };
    default:
      return state;
  }
};
