import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";

let initialState = {
    Isloading:false,
    user:[],
    IsError:false
}

export const fetchUser = createAsyncThunk('fetchUsers',async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
})
const userSlice = createSlice({
    name:'user',
    initialState,
    reducer:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchUser.pending,(state,action)=>{
            state.Isloading = true;
        });
        builder.addCase(fetchUser.fulfilled,(state,action)=>{
            state.Isloading = false;
            state.user = action.payload;
        })
        builder.addCase(fetchUser.rejected,(state,action)=>{
            state.IsError = true;
        })
    }
})
export default userSlice.reducer;