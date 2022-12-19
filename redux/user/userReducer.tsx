import { createSlice } from "@reduxjs/toolkit";

const userInitialData = {
  userName: "",
  name: "",
  lastName: "",
  correo: "",
  lastLogin: new Date(),
  token: "",
};

export const userReducer = createSlice({
  name: "user",
  initialState: userInitialData,
  reducers: {
    login: (state, { payload }) => {
      console.log("🚀 ~ file: userReducer.tsx:16 ~ login ~ payload", payload);
      (state.name = payload.name),
        (state.lastName = payload.lastName),
        (state.userName = payload.usuario),
        state.correo = payload.correo,
        (state.lastLogin = new Date()),
        (state.token = payload.token);
    },
    logout: (state) => {
      (state.name = ""),
        (state.lastName = ""),
        (state.userName = ""),
        state.correo = "",
        (state.lastLogin = new Date()),
        (state.token = "");
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userReducer.actions;

export default userReducer.reducer;
