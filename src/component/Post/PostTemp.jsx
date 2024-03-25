import React from "react"

export default function PostTemp({posts}){
  return (<>
    <ul style={{listStyle:"none"}}>
        <li>
            <div style={{padding:"1rem",border:"2px solid grey"}}>
                <h3>{posts.title}</h3>
                <p>{posts.id}&nbsp;{posts.body}</p>
            </div>
        </li>
    </ul>
  </>)
};