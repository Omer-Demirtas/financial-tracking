import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";



const initialState = 
{
    isLogin: false,
    loading: false,
    error: "",
    user: ""
}

export const fetchUser = createAsyncThunk("fetchuser", 
    async () => {
        const response = await axios.get("https://randomuser.me/api/")
        .then(response => response.data) 

        return response;
    }
)

const userSlice = createSlice(
    {
        name: "user",
        initialState,
        extraReducers: (builder) => 
        {
            builder.addCase(fetchUser.pending, (state, action) => {
                state.loading = true;
                state.error = "";
            });
            builder.addCase(fetchUser.fulfilled, (state, action) => {
                console.log(action)
                state.data = action.payload.results[0];
                state.loading = false;
                state.isLogin = true;
            })
            builder.addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = "Error at fetching data!"
            })
        }
    }
);

export default userSlice.reducer;