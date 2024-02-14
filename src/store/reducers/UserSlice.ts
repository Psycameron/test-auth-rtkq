import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { fetchUsers } from "./ActionCreators";

interface UserState {
  users: IUser[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: "",
  count: 0,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  //   reducers: {
  //     usersFetching(state) {
  //       state.isLoading = true;
  //     },
  //     usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
  //       state.isLoading = false;
  //       state.error = "";
  //       state.users = action.payload;
  //     },
  //     usersFetchingError(state, action: PayloadAction<string>) {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     },
  //   },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = "";
        state.users = payload;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload as string;
      });
  },
});

export default userSlice.reducer;
