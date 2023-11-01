import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice1';


const store = configureStore({
  reducer: {
    form: formReducer,
  },
});


export default store;
