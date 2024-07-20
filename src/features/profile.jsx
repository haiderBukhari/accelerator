import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        jwt: localStorage.getItem('jwt') || '',
        firstName: localStorage.getItem('firstName') || '',
        lastName: localStorage.getItem('lastName') || '',
        profilePicture: localStorage.getItem('profilePicture') || '',
    },
    reducers: {
        addUserDetails: (state, action) => {
            state.jwt = action.payload.jwt;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.profilePicture = action.payload.profilePicture;
            localStorage.setItem('jwt', action.payload.jwt);
            localStorage.setItem('firstName', action.payload.firstName);
            localStorage.setItem('lastName', action.payload.lastName);
            localStorage.setItem('profilePicture', action.payload.profilePicture);
        },
        removeUserDetails: (state) => {
            state.jwt = '';
            state.firstName = '';
            state.lastName = '';
            state.profilePicture = '';
            localStorage.removeItem('jwt');
            localStorage.removeItem('firstName');
            localStorage.removeItem('lastName');
            localStorage.removeItem('profilePicture');
        },
        changeFirstName: (state, action) => {
            state.firstName = action.payload;
            localStorage.setItem('firstName', action.payload);
        },
        changeLastName: (state, action) => {
            state.lastName = action.payload;
            localStorage.setItem('lastName', action.payload);
        },
        changeProfilePicture: (state, action) => {
            state.profilePicture = action.payload;
            localStorage.setItem('profilePicture', action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { addUserDetails, removeUserDetails, changeFirstName, changeLastName, changeProfilePicture  } = profileSlice.actions

export default profileSlice.reducer