import {useState,useEffect} from "react";
import {Comment} from "./Comment";
import {getComment} from "../Api";


export const Comments=()=>{
    const [data,setData]=useState([]);

    useEffect(()=>{
        getComment().then((a)=>{
            setData(a);
        })
        console.log(data);
    },[]);

    const update=(a)=>{
       
            setData(a);
        
        console.log(data);
    }

    
    
    return <div>
        <div>
            {
                data.map((e)=>
                    <div key={e.id} className="comments">
                        <div>
                            <span>{e.author} : {e.body}</span>
                            
                            <div>
                                {e.replies.map((comment) =>{
                                    return <Comment update={update} parent={e.author} key={Math.random()} comment={comment}/>
                                })}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
}