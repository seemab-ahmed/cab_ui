import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  AsyncThunk,
} from "@reduxjs/toolkit";
import apiServices from "services/requestHandler";
import { setToken , removeToken } from "utils/utility";

 export interface AuthState {
  isLoggedIn: boolean;
  user: { username: string } | any;
  loading: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  loading: false,
};



export const loginUser: AsyncThunk<boolean, object, object> | any =
  createAsyncThunk("login/user", async (args, thunkAPI) => {
    const { data } = args as any;
    try {
      const response = await apiServices.login(data);
      window.location.replace('/dashboard');
      setToken(response?.data?.token);
      await thunkAPI.dispatch(userDetails());
    } catch (e) {
      console.log(e);
    }
  });

  export const signupUser: AsyncThunk<boolean, object, object> | any =
  createAsyncThunk("signup/user", async (args, thunkAPI) => {
    const { data } = args as any;
    try {
      const response = await apiServices.signUp(data);
      setToken(response?.data?.token);
      await thunkAPI.dispatch(userDetails());
    } catch (e) {
      console.log(e);
    }
  });

  export const logoutUser: AsyncThunk<boolean, object, object> | any = createAsyncThunk(
    "user/logout",
    async (data, thunkApi) => {
      try {
        // apiServices.logout({ data });
        console.log("logout Successfully ! user");
        window.location.replace('/');
        removeToken();
        return true;
      } catch (e: any) {
        return false;
      }
    }
  );

export const userDetails: AsyncThunk<boolean, object, object> | any =
  createAsyncThunk("user/details", async (_, thunkAPI) => {
    const response = await apiServices.readUser();
    const { data } = response;
    thunkAPI.dispatch(setUser(data));
  });

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ data: any }>) {
      console.log(action.payload);
      state.isLoggedIn = true;
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    // login User
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.loading = false;
    });
    // logout User
    builder.addCase(logoutUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isLoggedIn = false;
    });
    builder.addCase(logoutUser.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
