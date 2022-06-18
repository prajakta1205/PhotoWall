import React   from "react";
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const PhotoWall= (props)=>{
    const post=props.posts;
    console.log(post)
  return (
    <div>
        <Link className="addIcon" onClick={props.onNavigate} to="/AddPhoto"> </Link>
        {/* <button onClick={props.onNavigate} className="addIcon"></button> */}
        <div className="photoGrid">{post
        .sort(function(x,y){
            return y.id-x.id
        }).map((post, index) => <Photo key={index} post={post} {...props} index={index}/>)}
        {/* .map((listR,index) => 
        <Photo key={index} post={post} {...props} index={index}/>)
            (<Photo key={index} listR={listR}
                {...props} index={index}
        />))} */}
        </div>
    </div>
  );
    
}

PhotoWall.propTypes={
    posts: PropTypes.array.isRequired
}

export default PhotoWall