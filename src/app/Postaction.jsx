export const fetchPostsRequest = ()=>{
    return{
        type: 'FETCH_POSTS_REQUEST'
    };
};

export const fetchPostsSuccess = (posts)=>{
    return{
        type: 'FETCH_POSTS_SUCCESS',
        payload: posts
    };
};

export const fetchPostsFailure = (error)=>{
    return{
        type: 'FETCH_POSTS_FAILURE',
        payload: error
    };
};

export const fetchPosts = ()=>{
    return (dispatch)=>{
        dispatch(fetchPostsRequest());
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(post => dispatch(fetchPostsSuccess(post.slice(0,10))))
        .catch(error=>dispatch(fetchPostsFailure(error.message)));
    }
}