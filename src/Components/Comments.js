import React from "react";

const Comments=()=>{

    return(
        <div className="comment">
            <form className="comment-form">
                <input type="text" placeholder="Comments"/>
                <input type="submit" hidden/>
            </form>
        </div>
    )
}

export default Comments