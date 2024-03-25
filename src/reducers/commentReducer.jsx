const initialState = {
    IsLoading:false,
    comments:[],
    error:''
}

export const commentReducer = (state = initialState,action)=>{
    switch(action.type){
        case 'FETCH_COMMENT_REQUEST':
            return{
                ...state,
                IsLoading:true
            }
        case 'FETCH_COMMENT_SUCCESS':
            return{
                IsLoading : false,
                comments: action.payload,
            }
        case 'FETCH_COMMENT_FAILURE':
            return{
                Isloading : false,
                comments:[],
                error:action.payload
            }
        default :
            return state;
    }
}