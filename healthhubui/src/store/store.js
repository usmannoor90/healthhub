import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./slices/authSlice";
import servicesReducer from "./slices/servicesSlice";
import formReducer from "./slices/formSlice";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  whitelist: ["traderaauth", "apiLoading", "dashdata"],
};

const rootReducer = combineReducers({
  authen: authReducer,
  services: servicesReducer,
  form: formReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
