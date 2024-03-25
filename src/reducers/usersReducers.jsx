const initialState = {
    IsLoading:false,
    users:[],
    error:''
};
export const usersReducer = (state = initialState,action)=>{
    console.log(action.type);
    switch(action.type){
        case 'FETCH_USERS_REQUEST':
            return{
                ...state,
                IsLoading:true
            }
        case 'FETCH_USERS_SUCCESS':
            return{
                IsLoading:false,
                users: action.payload,
                error:''
            }
        case 'FETCH_USERS_FAILURE':
            return{
                IsLoading:false,
                users:[],
                error:action.payload
            }
        default :
        console.log(action.payload);

            return state;   
    }
}