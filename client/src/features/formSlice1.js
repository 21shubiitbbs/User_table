import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "http://localhost:5000/api/users/";
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (_id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${BASE_URL}${_id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateuser = createAsyncThunk(
  "users/deleteUser",
  async (_id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}${_id}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const fetchUsers = createAsyncThunk("form/fetchUsers", async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.data;
  } catch (error) {
    throw Error("Unable to fetch users");
  }
});

const initialState = {
  users: [],
  _id: "",
  status: "idle",
  error: null,
  firstName: "",
  middleName: "",
  lastName: "",
  title: "",
  dayOfBirth: "",
  monthOfBirth: "",
  yearOfBirth: "",
  gender: "",
  phoneNumber: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  email: [""],
  selectedValue: "",
  product: "",
  department: "",
  selectedDate: null,
  errors: {
    title: false,
    firstName: false,
    lastName: false,
    phoneNumber: false
  }
};
const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
      state.errors[field] = "";
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setRadioValue: (state, action) => {
      state.selectedValue = action.payload;
    },
    updateSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    reset: () => initialState
  },
  extraReducers: (builder) => {
    builder
      // .addCase(fetchUsers.pending, (state) => {
      //   state.status = 'loading';
      // })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});
export const selectAllUsers = (state) => state.form.users;
export const {
  updateField,
  setEmail,
  setRadioValue,
  updateSelectedDate,
  reset
} = formSlice.actions;
export const selectEmail = (state) => state.form.email;
export const selectSelectedValue = (state) => state.form.selectedValue;
export const selectSelectedDate = (state) => state.form.selectedDate;
export default formSlice.reducer;
