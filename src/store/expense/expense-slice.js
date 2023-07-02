const { createSlice } = require("@reduxjs/toolkit");
export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    income: 1000,
    expenseList: [],
  },
  reducers: {
    addExpenseAction: (currentSlice, action) => {
      //   console.log("addExpenseAction");
      //   console.log("action - ", action);
      currentSlice.expenseList.push(action.payload);
      // currentSlice.expenseList.push({ name: "Lemon", price: 5.0 });
    },
    setIncomeAction: (currentSlice, action) => {
      currentSlice.income = action.payload;
    },
  },
});

export const { addExpenseAction, setIncomeAction } = expenseSlice.actions;
