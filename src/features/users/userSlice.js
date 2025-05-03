import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


// API call for users.
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
      const response = await axios.get('http://localhost:3001/users');
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch users. Error message: ${error}` );
    }
  });



  const userSlice = createSlice({
    name: 'users',
    initialState: {
      users: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
  });
  
  export default userSlice.reducer;