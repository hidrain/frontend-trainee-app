import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterSliceState } from './types';

const initialState: FilterSliceState = {
    searchValue: '',
    department: 'all'
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
    },
  });
  
  export const { setSearchValue, setDepartment } = filterSlice.actions;
  export default filterSlice.reducer;