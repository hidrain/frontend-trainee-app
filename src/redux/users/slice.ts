import axios from 'axios'
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { UsersSliceState, UserType, Status, FetchProps } from './types';

const initialState: UsersSliceState = {
    users: [],
    status: Status.LOADING,
}


export const fetchUsers = (department: string) => {
    return axios.get(`https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${department}`,
        { responseType: 'json' });
}

export const catchUsers = createAsyncThunk('users/catchUsers', async (params: FetchProps) => {
    const { department } = params
    const data = await fetchUsers(department).then((res) => res.data);
    return data.items;
})


export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<UsersSliceState>) => {
            state.users = action.payload.users
        },
        setSortUsersByName: (state) => {
            const copyData = state.users.concat()
            const sortData = copyData.sort((a, b) => {
                return (a.firstName > b.firstName ? 1 : -1)
            })
            state.users = sortData

        },
        setSortUsersByDate: (state) => {
            const copyData = state.users.concat()

            const sortData = copyData.sort(function compare(a, b) {
                const now = new Date();
                const dateA: Date = new Date(a.birthday);
                dateA.setFullYear(now.getFullYear());
                if (dateA.getTime() - now.getTime() < 0) {
                    dateA.setFullYear(now.getFullYear() + 1)
                }
                const dateB: Date = new Date(b.birthday);
                dateB.setFullYear(now.getFullYear());
                if (dateB.getTime() - now.getTime() < 0) {
                    dateB.setFullYear(now.getFullYear() + 1)
                }
                return dateA.getTime() - dateB.getTime();
            });
            state.users = sortData
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

export const { setUsers, setSortUsersByName, setSortUsersByDate } = usersSlice.actions
export default usersSlice.reducer