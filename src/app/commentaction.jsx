export const fetchCommentsRequest =()=>{
    return {
        type:'FETCH_COMMENT_REQUEST',
    };
}   
export const fetchCommentsSuccess =(comments)=>{
    return {
        type:'FETCH_COMMENT_SUCCESS',
        payload:comments
    };
}  
export const fetchCommentsFailure =(error)=>{
    return {
        type:'FETCH_COMMENT_FAILURE',
        payload:error
    };
}

export const fetchComments=()=>{
    return (dispatch)=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response=>response.json())
        .then(comments=>dispatch(fetchCommentsSuccess(comments.slice(0,10))))
        .catch(error=>dispatch(fetchCommentsFailure(error)))
    }
}