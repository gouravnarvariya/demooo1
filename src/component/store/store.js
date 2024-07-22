import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import AuthSlice from "./slice/AuthSlice";
import RegisterSlice from "./slice/RegisterSlice";


const persistConfig = {
    key: "root",
    storage,
};
const rootReducer = combineReducers({
    Authentication: persistReducer(persistConfig, AuthSlice),
    Registration : RegisterSlice
});

const store = configureStore({
    reducer: rootReducer,
  });

const persistedStore = persistStore(store);

export { store, persistedStore };