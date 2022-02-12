import {useState} from "react";
import {createComment,getComment} from "../Api";

export const Form=({arr,author,update})=>{
    // console.log("arr",arr);

    let [text,setText]=useState("");

    const add=()=>{
        createComment(text,author).then((a)=>{
            console.log("a",a)
            arr.push(a);
            getComment().then((p)=>{
                update(p);
                console.log(p)
            })
            
        });
       
    }

    return <div>
        <input type="text"  placeholder="Enter you Comment" onChange={(e)=>setText(e.target.value)}/>
        <button onClick={add}>Add</button>
    </div>
}