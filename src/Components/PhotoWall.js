import React   from "react";
import Photo from './Photo'

const PhotoWall= (props)=>{
    const listR=props.posts;

  return (
    <div className="photoGrid">{listR.map((listR,index) => (<Photo key={index} listR={listR}/>))}</div>
  );
        // return(<div>
        //     {props.posts}
            
        // </div>
        // );
    
}

export default PhotoWall