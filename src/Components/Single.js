import React from "react";
import Photo from "./Photo";
import Comments from "./Comments";

const Single =(props)=>{
    console.log(props)
    console.log('hi')
    const {match, posts} = props
        const id = Number(match.params.id)
        const post = posts.find((post) => post.id === id)
        const comments=props.comments
    console.log(comments)
    return(
       
        <div className="single-photo">
            <Photo post={post}/>
            <Comments addComment={props.addComment} comments={comments}/>
        </div>

    )
}

export default Single