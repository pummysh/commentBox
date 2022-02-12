import {useState} from "react";
import {Form} from "./CommentForm"

export const Comment=({comment,parent,update})=>{
  console.log(comment)
    const nestedComments = (comment.replies || []).map(comment => {
        return <Comment parent={parent} update={update} key={comment.id} comment={comment} type="child" />
      })
const [flag,setFlag]=useState(false);

    
      return (
        <div style={{"marginLeft": "25px", "marginTop": "10px"}}>
          <div>
            <div>{comment.author} : {comment.body}</div>
            <button onClick={()=>setFlag((prev)=>!prev)}>Replies</button>
            <div>
              {
                flag ? <Form update={update} author={parent} arr={comment.replies}/> : "" 
              }
            </div>
          </div>
          {nestedComments}
        </div>
      )
}