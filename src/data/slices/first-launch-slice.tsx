import {PayloadAction, createSlice} from '@reduxjs/toolkit';

type FirstLaunchState = {
  firstLaunch: boolean;
};

const initialState: FirstLaunchState = {
  firstLaunch: true,
};

const firstLaunchSlice = createSlice({
  name: 'firstLaunch',
  initialState,
  reducers: {
    setFirstLaunch: (state, action: PayloadAction<boolean>) => {
      state.firstLaunch = action.payload;
    },
    clearFirstLauncState: () => {
      return initialState;
    },
  },
});

export const {setFirstLaunch, clearFirstLauncState} = firstLaunchSlice.actions;

export const selectFirstLaunchState = (state: {
  firstLaunch: FirstLaunchState;
}) => state.firstLaunch.firstLaunch;

export default firstLaunchSlice.reducer;
