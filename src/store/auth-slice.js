import {  createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState:{isLoggedIn : false},
    reducers: {
        LogIn(state){
            state.isLoggedIn = true;
        },
        LogOut(state){
            state.isLoggedIn = false;
        }
    }

});

export const authActions = authSlice.actions;
export default authSlice;


