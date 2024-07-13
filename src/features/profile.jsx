import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        jwt: localStorage.getItem('jwt') || '',
    },
    reducers: {
        modifyJWT: (state, action) => {
            state.jwt = action.payload;
            localStorage.setItem('jwt', action.payload);
        },
        removeJWT: (state) => {
            state.jwt = '';
            localStorage.removeItem('jwt');
        },
    },
});

// Action creators are generated for each case reducer function
export const { modifyJWT, removeJWT } = profileSlice.actions

export default profileSlice.reducer