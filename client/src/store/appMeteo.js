import { createSlice } from '@reduxjs/toolkit';

const appMeteo = createSlice({
    name: 'meteo',
    initialState: {
        meteo: null
    },
    reducers: {
        setMeteoAll: (state, action) => {
            state.meteo = action.payload
        }
    },
});

export const { setMeteoAll } = appMeteo.actions;

export default appMeteo.reducer;