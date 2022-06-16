
import React  from "react";
import PropTypes from 'prop-types';

const Photo=(props)=>{
    const post=props.listR;
    console.log(post)
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

Photo.propTypes={
    post:PropTypes.array.isRequired,
    onRemovephoto:PropTypes.func.isRequired
}

export default Photo