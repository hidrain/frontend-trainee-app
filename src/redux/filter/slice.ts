import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterSliceState } from './types';

const initialState: FilterSliceState = {
  searchValue: '',
  department: 'all',
  sortPopup: false,
  dateOfBrthday: false,
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setDepartment: (state, action: PayloadAction<any>) => {
      state.department = action.payload
    },
    setSortPopup: (state, action: PayloadAction<boolean>) => {
      state.sortPopup = action.payload
    },
    setSort: (state, action: PayloadAction<boolean>) => {
      state.dateOfBrthday = action.payload
    },
  },
});

export const { setSearchValue, setDepartment, setSortPopup, setSort } = filterSlice.actions;
export default filterSlice.reducer;