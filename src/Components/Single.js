import React from "react";


const Single =(props)=>{
    const {match,posts}=props
    const id= match.params.id
    const post=posts.find((post)=>post.id===id)
    console.log(post)
    return(
       
        <div className="single-photo">
            
        </div>

    )
}

export default Single