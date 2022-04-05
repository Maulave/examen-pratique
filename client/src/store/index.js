import { configureStore } from '@reduxjs/toolkit';
import app from './appSlice';
import meteo from './appMeteo';




export const store = configureStore({
    reducer: {
        app,
        meteo
    } 
});