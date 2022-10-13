import axios from 'axios'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { UsersSliceState, UserType, Status } from './types';

const initialState: UsersSliceState = {
    users: [],
    status: Status.LOADING
}

export const fetchUsers = () => {
    return axios.get(`https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=all`, 
        { responseType: 'json' });
}
 
export const catchUsers = createAsyncThunk<UserType[]>('users/fetchUsers', 
    async () => {
        const data = await fetchUsers().then((res) => res.data);
        return data.items;
})


export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: any) => {
            state.users = action.payload.users
        },
    },
    extraReducers: (builder) => {
        builder.addCase(catchUsers.pending, (state) => {
            state.status = Status.LOADING;
            state.users = [];
        });
        builder.addCase(catchUsers.fulfilled, 
            (state, action: PayloadAction<UserType[]>) => {
            state.status = Status.SUCCESS;
            state.users = action.payload;
        });
        builder.addCase(catchUsers.rejected, (state) => {
            state.status = Status.ERROR;
            state.users = [];
        });
    },
});

export const { setUsers } = usersSlice.actions
export default usersSlice.reducer