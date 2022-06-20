import React from "react";
import Photo from "./Photo";
import Comments from "./Comments";

const Single =(props)=>{
    console.log(props)
    const {match, posts} = props
        const id = Number(match.params.id)
        const post = posts.find((post) => post.id === id)
    console.log(id)
    return(
       
        <div className="single-photo">
            <Photo post={post}/>
            <Comments/>
        </div>

    )
}

export default Single