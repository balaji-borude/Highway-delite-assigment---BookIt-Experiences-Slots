import { createSlice } from "@reduxjs/toolkit";


// getItem(key: string): string | null
interface AuthState {
  user: string | null; // ideally, define a User interface
  token: string | null;
  loading: boolean;
  signupData: string | null;
}

const storedUser = localStorage.getItem("user");


const initialState: AuthState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  token: localStorage.getItem("token"),
  loading: false,
  signupData: null,
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);  // no stringify needed
    },
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    clearToken: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSignupData: (state, action) => {
      state.signupData = action.payload;
    },
  },
});


export const { setToken, clearToken, setLoading, setSignupData, setUser } =
  authSlice.actions;
export default authSlice.reducer;
