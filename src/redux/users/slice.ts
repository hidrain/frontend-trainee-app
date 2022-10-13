import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { UsersSliceState, UserType } from './types';

const initialState: UsersSliceState = {
    users: [],
}

export const fetchUsers = () => {
    return axios.get(`https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all`, { responseType: 'json' });
}
 
export const catchUsers = createAsyncThunk<UserType[]>('users/fetchUsers', async () => {
    const data = await fetchUsers().then((res) => res.data);
    return data.items;
})


export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: any) => {
            state.users = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(catchUsers.pending, (state, action) => {
            state.users = [];
        });
        builder.addCase(catchUsers.fulfilled, (state, action) => {
            state.users = action.payload;
        });
        builder.addCase(catchUsers.rejected, (state, action) => {
            state.users = [];
        });
    },
});

export const { setUsers } = usersSlice.actions
export default usersSlice.reducer