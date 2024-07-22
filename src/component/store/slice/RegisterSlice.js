import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {setData, setOtp, setUserData} from '../../../utils/TokenHandler'
import Api from "../../api/Api";

 
const initialState = {
    RegisterAdminData : { pending: false, data: null, error: null},
    VerifyOtpData : { pending: false, data: null, error: null},
};




export const RegisterUser = createAsyncThunk("Register", async (formData) => {
    console.log(formData)
    try {
        const response = await Api.post("/registrationForWeb", formData);
        console.log(response)
        const { data, message,status } = response  
        console.log(response)
        if(status) {
            setUserData(formData)
            const otp = data
             setOtp(otp)
        }
        return {data}
    } catch (error) {
        console.log(error)
        const { message } = error.response.data;
        return {
            error: {
                type: "server",
                message: message || "Something went wrong",
            },
        };
    }
}
);





const RegistrationSlice = createSlice({
    name: "Registration",
    initialState,
    reducers: {
        clearRegisterData: (state) => {
            state.RegisterAdminData = { pending: false, data: null, error: null }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(RegisterUser.pending, (state, action) => {
                state.RegisterAdminData.pending = true;
            })
            .addCase(RegisterUser.fulfilled, (state, action) => {
                state.RegisterAdminData.pending = false;
                if (action.payload.data) {
                    state.RegisterAdminData.data = action.payload.data;
                } else {
                    state.RegisterAdminData.error = action.payload.error;
                }
            })
            .addCase(RegisterUser.rejected, (state, action) => {
                state.RegisterAdminData.pending = false;
                if (action?.payload?.error) {
                    state.RegisterAdminData.error = action?.payload?.error;
                } else {
                    state.RegisterAdminData.error = {
                        type: "server",
                        message: "Internal server Error",
                    }
                }
            })

           



    },
    })

    export const { clearRegisterData } = RegistrationSlice.actions;
    export default RegistrationSlice.reducer;