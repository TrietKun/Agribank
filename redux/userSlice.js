// userSlice.js
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
  'users/fetchByIdStatus',
  async () => {
    const response = await axios.get('https://655080547d203ab6626ddba7.mockapi.io/nh');
    return response.data;
  }
);
const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
    fetchUsserById: (state, action) => {
      const user = axios.get(`https://655080547d203ab6626ddba7.mockapi.io/nh/${action.payload}`);
      state.value = user;    
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      });
  },
});

export const { setUser,fetchUsserById } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
