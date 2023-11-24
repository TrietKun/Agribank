// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer, { fetchUsers } from './userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
store.dispatch(fetchUsers());
export default store;
