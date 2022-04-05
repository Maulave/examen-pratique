import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        ville: null
    },
    reducers: {
        setVilleAll: (state, action) => {
            state.ville = action.payload
        }
    },
});

export const { setVilleAll } = appSlice.actions;

export default appSlice.reducer;