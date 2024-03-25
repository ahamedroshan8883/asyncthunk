import React from "react"

export default function UserTemp({user}){
  return (<>
  <div style={{border:"1px solid grey",padding:"0.75rem",margin:"1rem",width:"13rem",height:"13rem"}}>
  <h2 style={{padding:"1rem",fontSize:"1.25rem"}}>{user.name}</h2>
  <div style={{textAlign:"left"}}>
    <h3>Email :</h3>
    <span>{user.email}</span><br />
  </div>

    <div style={{display:"flex",flexDirection:"column",textAlign:"left",justifyContent:"flex-end"}}>
        <h3>Address :</h3>
        <p>{user.address.city}</p>
        <p>{user.address.street}</p>
        <p>{user.address.zipcode}</p>
    </div>
  </div>
  </>)
};  