export const fetchUsersRequest=()=>{
    return{
        type:'FETCH_USERS_REQUEST'
    };
};

export const fetchUserSuccess = (users)=>{
    
    return{
        type:'FETCH_USERS_SUCCESS',
        payload:users
    }
}

export const fetchUserFailure = (error)=>{
    return{
        type:'FETCH_USERS_FAILURE',
        payload:error
    }
}

export const fetchUsers = ()=>{
    return (dispatch)=>{
        dispatch(fetchUsersRequest())
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>dispatch(fetchUserSuccess(users.slice(0,10))))
        .catch(error=>dispatch(fetchUserFailure(error.message)) );
    }
}