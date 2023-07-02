const { createSlice } = require("@reduxjs/toolkit");
export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    authList: { name: "Robin", status: "Connected" },
  },
});
