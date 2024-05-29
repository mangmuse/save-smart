import initialExpenseData from "../../data/fakedata.json";

export const initialState = {
  expenses: initialExpenseData,
};
const ADD_EXPENSE = "ADD_EXPENSE";
const DELETE_EXPENSE = "DELETE_EXPENSE";
const UPDATE_EXPENSE = "UPDATE_EXPENSE";

export const addExpense = (newExpense) => ({
  type: ADD_EXPENSE,
  payload: newExpense,
});
export const updateExpense = (updatedExpense) => ({
  type: UPDATE_EXPENSE,
  payload: updatedExpense,
});
export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  payload: id,
});

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
