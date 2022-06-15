import React   from "react";
import Photo from './Photo'

const PhotoWall= (props)=>{
    const listR=props.posts;
    console.log(props)
  return (
    <div className="photoGrid">{listR.map((listR,index) => 
        (<Photo key={index} listR={listR}
            onRemovephoto={props.onRemovePhoto}
    />))}
    </div>
  );
    
}

export default PhotoWall