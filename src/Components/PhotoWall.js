import React   from "react";
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const PhotoWall= (props)=>{
    const listR=props.posts;
    console.log(listR)
  return (
    <div>
        <Link className="addIcon" onClick={props.onNavigate} to="/AddPhoto"> </Link>
        {/* <button onClick={props.onNavigate} className="addIcon"></button> */}
        <div className="photoGrid">{listR
        .sort(function(x,y){
            return y.id-x.id
        })
        .map((listR,index) => 
            (<Photo key={index} listR={listR}
                onRemovephoto={props.onRemovePhoto}
        />))}
        </div>
    </div>
  );
    
}

PhotoWall.propTypes={
    posts: PropTypes.array.isRequired,
    onRemovePhoto:PropTypes.func.isRequired
}

export default PhotoWall