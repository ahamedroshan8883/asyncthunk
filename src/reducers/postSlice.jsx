// import { createAsyncThunk, createSlice,} from "@reduxjs/toolkit";

// let initialState = {
//     IsLoading:false,
//     posts:[],
//     IsError:false
// }

// export const fetchPost = createAsyncThunk('fetchPosts',async()=>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     return data;
// })
// const postSlice = createSlice({
//     name:"posts",
//     initialState,
//     reducer:{},
//     extraReducers:(builder)=>{
//         builder.addCase(fetchPost.pending,(state,action)=>{     
//             state.IsLoading = true;
//         });
//         builder.addCase(fetchPost.fulfilled,(state,action)=>{
//             state.IsLoading = false;
//             state.posts = action.payload;
//         })
//         builder.addCase(fetchPost.rejected,(state,action)=>{
//             state.IsError = true;
//         })
//     }
// })
// export default postSlice.reducer;