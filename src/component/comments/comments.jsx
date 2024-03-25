import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchComments } from "../../app/commentaction";
import CommentsTemp from "./commentsTemp";

export default function Comments(){
  const dispatch = useDispatch();
  const {Isloading,comments,error} = useSelector(state=>state.commentsStore);
  useEffect(()=>{
    dispatch(fetchComments());
  })
  return (<>
    <h1>Comments</h1>
    {Isloading?"Loading...":comments.map(data=><CommentsTemp comments={data}></CommentsTemp>)}
    {/* {JSON.stringify(comments)} */}
  </>)
};