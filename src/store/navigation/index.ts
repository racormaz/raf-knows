import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../interfaces'
import { NavigationState } from './interfaces'

const initialState: NavigationState = {
  activeSection: "home",
  status: 'idle',
  error: null,
}

const sliceName = "navigation";

const fetchData = createAsyncThunk<string>(`${sliceName}/fetchData`, () => {
  let resolve: Function;
  const promise: Promise<string> = new Promise((res) => {
    resolve = res;
  })
  setTimeout(() => resolve("newSection"), 5000)
  return promise;
})

export const counterSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading"
      }).addCase(fetchData.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = "succeeded"
        state.activeSection = action.payload
      })
  },
})

// Action creators are generated for each case reducer function
export const { setActiveSection } = counterSlice.actions

export const mapStateToProps = (state: RootState) => {
  const { navigation } = state
  return {
    ...navigation,
    loading: navigation.status === "loading"
  }
};

export const mapDispatchToProps = { ...counterSlice.actions, fetchData };

export default counterSlice.reducer