
import React  from "react";

const Photo=(props)=>{
    console.log(props);
    const post=props.listR;
    return(
        <figure className="figure">
            <img className="photo" src={post.imageLink} alt={post.description}/>
            <figcaption><p>{post.description}</p></figcaption>
            <div className="button-container">
            <button className="remove-button" onClick={()=>{props.onRemovephoto(post)}}>Remove</button>
            </div>
        </figure>
    )
}

export default Photo