import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../../app/Useraction";
import UserTemp from "./UserTemp";

export default function User(){
    const dispatch = useDispatch();
    let data = useSelector(state=>state.usersStore)
    // useEffect(()=>{
    //     dispatch(fetchUser());
    // },[])
     useEffect(()=>{
        dispatch(fetchUsers());
    },[])
  return (<>
    <h1>User</h1>

    {data.Isloading?"Loading..":<div style={{width:"100vw",maxWidth:"75rem",display:"flex",justifyContent:"center",flexDirection:"row",flexWrap:"wrap",margin:"0 auto"}}>
      {data.users.map(data=><UserTemp key={data.id} user={data}></UserTemp>)}</div>} 
    {data.error?"Error..":''}
    {/* {JSON.stringify(data.users)} */}
  </>)
};