import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";
import { authSlice } from "./auth/auth-slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import localStorage from "redux-persist/es/storage";

const rootReducer = combineReducers({
  EXPENSE: expenseSlice.reducer,
  AUTH: authSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage: localStorage,
  whiteList: ["EXPENSE"],
};

const persistReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
