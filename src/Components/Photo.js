
import React  from "react";

const Photo=(props)=>{
    console.log(props);
    return(
        <figure className="figure">
            <img src={props.listR.imageLink} alt={props.listR.description}/>
        </figure>
    )
}


export default Photo