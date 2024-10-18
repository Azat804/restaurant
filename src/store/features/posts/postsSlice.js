import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
  filteredPosts:[],
}

export const fetchPosts = createAsyncThunk('posts', async () => {
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts')
    return response.json();
})
export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
filterPosts: (state,action ) => {
state.filteredPosts = state.posts.filter(post=>post.title.toLowerCase().includes(action.payload.toLowerCase()))
}
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload
            state.filteredPosts = action.payload
        })
    }
  })

  export const { filterPosts } = postsSlice.actions
  export default postsSlice.reducer
