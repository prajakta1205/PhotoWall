
import React  from "react";

const Photo=(props)=>{
    console.log(props);
    return(
        <figure className="figure">
            <img className="photo" src={props.listR.imageLink} alt={props.listR.description}/>
            <figcaption><p>{props.listR.description}</p></figcaption>
            <div className="button-container">
            <button className="remove-button">Remove</button>
            </div>
        </figure>
    )
}

export default Photo