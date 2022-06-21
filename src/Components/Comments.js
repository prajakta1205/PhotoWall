import React from "react";

const Comments=(props)=>{
    console.log(props)
    let handleSubmit=(e) =>{
        e.preventDefault();
        const comment=e.target.elements.comment.value
        console.log(comment+''+props.id)
        props.addComment(comment,props.id)
        e.target.elements.comment.value = ''
    }
    //const post=props.comments
    console.log(props.comments)
    return(
        
        <div className="comment">
            {/* {
                post.map((comment, index) => {
                    return (
                        <p key={index}> {comment} </p>
                    )
                })
            }
             */}
       
            <div className="comment" onSubmit={handleSubmit}>
                <form className="comment-form">
                    <input type="text" placeholder="Comments" name="comment"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        </div>
    )
}

export default Comments