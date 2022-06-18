import React from "react";

const AddPhoto=(props)=>{

    let handleSubmit=(e) =>{
        e.preventDefault();
        const imageLink=e.target.elements.Link.value;
        const description=e.target.elements.description.value;
        const post={
            id:Number(new Date()),
            description:description,
            imageLink:imageLink
        }
        if(description && imageLink)
        {
            //console.log(props);
            props.addPost(post)
            props.onHistory.push('/')
            //props.onaddPhoto(post)
        }
        console.log('hi');
    };

    return(
        <div>
            {/* <h1>Photowall</h1> */}
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Link" name="Link"></input>
                    <input type="text" placeholder="Description" name="description"></input>
                    <button>Post</button>
                </form>
            </div>
        </div>
    );
}



export default AddPhoto