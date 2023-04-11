import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

export const store = configureStore({
  //Payment integration Pending
  reducer: {
    user : userReducer,
  },
});
