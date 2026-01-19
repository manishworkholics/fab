import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../../services/auth";
import { getItemFromStorage } from "../../helpers/misc";

export const logout = createAsyncThunk("auth/logout", async () => {
  AuthService.logout();
});
const storedUser = JSON.parse(getItemFromStorage("user") || "null");
const storedAccessToken = getItemFromStorage("accessToken");
interface AuthState {
  isLoggedIn: boolean;
  user: null;
  roles: string[];
  accessToken: string | null;
}

const initialState: AuthState = {
  // isLoggedIn: false,
  // user: null,
  // roles: [],
  accessToken: null,

  isLoggedIn: !!storedAccessToken, // Check if accessToken exists
  user: storedUser || null,
  roles: storedUser?.role ? [storedUser.role] : [],
  // ac                                                                                                                                                                                                                                                                                                                                                                                                                                      cessToken: storedAccessToken,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { user, accessToken } = action.payload;
      state.isLoggedIn = true;
      state.user = user;
      state.roles = user?.role ? [user.role] : [];
      state.accessToken = accessToken;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("accessToken", accessToken);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout.fulfilled, (state) => {
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      state.isLoggedIn = false;
      state.user = null;
      state.roles = [];
      state.accessToken = null;
    });
  },
});

// Export the reducer
export const { loginSuccess } = authSlice.actions;
export default authSlice.reducer;
