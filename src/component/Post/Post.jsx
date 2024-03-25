import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../../app/Postaction";
// import PostTemp from "./PostTemp";

export default function Post(){
  // let data = useSelector((state)=>state.postsStore)

  // let dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(fetchPost());
  // },[])
  const dispatch = useDispatch();
  const {posts, loading, error} = useSelector(state=>state.postsStore)

  useEffect(()=>{
    dispatch(fetchPosts());
  },[dispatch])
  return (<>
  <h1>Post</h1>
    {/* 
   {data.IsLoading? "Loading...":
                      <div style={{width:"100vw",maxWidth:"100rem",display:"flex",flexDirection:"column",textAlign:"left",flexWrap:"wrap",margin:"0 auto"}}>
                        {data.posts.map((data) => <PostTemp posts={data}></PostTemp>)}<hr/></div>}
    {data.IsError? "Error":''} */}
    
    {/* {JSON.stringify(data.posts)} */}

    {loading && <p>loading...</p>}
    {error && <p>Error: {error}</p>}
    <ul>
      {posts.map(post=>(
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  </>)
};