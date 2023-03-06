import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducer';
import thunk from 'redux-thunk';

export const store = configureStore({
    reducer: userReducer,
    middleware: [thunk],
});


