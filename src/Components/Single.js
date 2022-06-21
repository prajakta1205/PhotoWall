import React from "react";
import Photo from "./Photo";
import Comments from "./Comments";

const Single =(props)=>{
    const {match, posts} = props
        const id = Number(match.params.id)
        const post = posts.find((post) => post.id === id)
        const comments=props.comments[match.params.id] || []
    return(
       
        <div className="single-photo">
            <Photo post={post}/>
            <Comments addComment={props.addComment} comments={comments} id={id}/>
        </div>

    )
}

export default Single