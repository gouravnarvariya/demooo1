import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {setData} from '../../../utils/TokenHandler'
import Api from "../../api/Api";

 
const initialState = {
    UserAuthLogin: { pending: false, data: null, error: null},
};


export const AuthLogin = createAsyncThunk("login", async (formData) => {
    console.log(formData)
    try {
        const response = await Api.post("/login", formData);
        const {data, status, message } = response
        if(status) {
            setData(data)
        }
        console.log(response)
        
        return {data}
    } catch (error) {
        const { data } = error.response;
        return {
            error: {
                type: "server",
                message: data?.error || "Something went wrong",
            },
        };
    }
}
);

export const VerifyUser = createAsyncThunk("verify otp", async (formData) => {
    console.log(formData)
    try {
        const response = await Api.post("/checkOtpVerificationForWeb", formData);
        console.log(response)
        const { data, message ,status} = response 
        if(status) {
           setData(data)
        }
        return { data}
    } catch (error) {
        const { data } = error.response;
        return {
            error: {
                type: "server",
                message: data?.error || "Something went wrong",
            },
        };
    }
}
);



const Authentication = createSlice({
    name: "Authentication",
    initialState,
    reducers: {
        clearUserAuthLogin: (state) => {
            state.UserAuthLogin = { pending: false, data: null, error: null }
        },
        logout: (state) => {
            state.UserAuthLogin = { pending: false, data: null, error: null }
        }
    },
    extraReducers: (builder) => {
        builder

            .addCase(AuthLogin.pending, (state, action) => {
                state.UserAuthLogin.pending = true;
            })
            .addCase(AuthLogin.fulfilled, (state, action) => {
                state.UserAuthLogin.pending = false;
                if (action.payload.data) {
                    state.UserAuthLogin.data = action.payload.data;
                } else {
                    state.UserAuthLogin.error = action.payload.error;
                }
            })
            .addCase(AuthLogin.rejected, (state, action) => {
                state.UserAuthLogin.pending = false;
                if (action?.payload?.error) {
                    state.UserAuthLogin.error = action?.payload?.error;
                } else {
                    state.UserAuthLogin.error = {
                        type: "server",
                        message: "Internal server Error",
                    }
                }
            })

            .addCase(VerifyUser.pending, (state, action) => {
                state.UserAuthLogin.pending = true;
            })
            .addCase(VerifyUser.fulfilled, (state, action) => {
                state.UserAuthLogin.pending = false;
                if (action.payload.data) {
                    state.UserAuthLogin.data = action.payload.data;
                } else {
                    state.UserAuthLogin.error = action.payload.error;
                }
            })
            .addCase(VerifyUser.rejected, (state, action) => {
                state.UserAuthLogin.pending = false;
                if (action?.payload?.error) {
                    state.UserAuthLogin.error = action?.payload?.error;
                } else {
                    state.UserAuthLogin.error = {
                        type: "server",
                        message: "Internal server Error",
                    }
                }
            })
           


    },
    })

    export const { clearUserAuthLogin,logout } = Authentication.actions;
    export default Authentication.reducer;