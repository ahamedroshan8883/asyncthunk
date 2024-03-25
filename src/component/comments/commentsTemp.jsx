import React from "react"

export default function CommentsTemp({comments}){
  return (<>
     <ul style={{listStyle:"none"}}>
        <li>
            <div style={{padding:"1rem",border:"2px solid grey"}}>
                <h3>{comments.name}</h3>
                <p>{comments.id}&nbsp;{comments.body}</p>
            </div>
        </li>
    </ul>
  </>)
};