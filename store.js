import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "./rootReducer";
import { applyMiddleware } from "./authMiddleware"

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(applyMiddleware)
});

export default store;
