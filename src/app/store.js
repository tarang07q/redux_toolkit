import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/ToDo/ToDoSlice';
export const store = configureStore({
    reducer : todoReducer
});