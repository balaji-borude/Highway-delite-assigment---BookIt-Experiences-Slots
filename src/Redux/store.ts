import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/authSlice';



export const store = configureStore({
  reducer: {
    auth: authReducer,
    // store:storeReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
