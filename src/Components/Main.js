import React ,{Component} from "react";
import  Title  from "./Title";
// import PhotoWall from "./PhotoWall";
// import AddPhoto from "./AddPhoto";
import {Route} from "react-router-dom";
import PhotoWall from "./PhotoWall";


class Main extends Component {
   constructor(){
      super()
     
   }




   // removePhoto(postRemove){
   //    console.log(postRemove.description)
   //    this.setState((state)=>({
   //       posts: state.posts.filter(posts => posts!== postRemove)
   //    }))
   // }

   // navigate(){
   //    this.setState({
   //       screen:'addPhoto'
   //    })
   // }

   // addPhoto(postSubmitted){
   //    this.setState(state =>({
   //       posts:state.posts.concat([postSubmitted])
   //    }));
   // }

    render(){
       console.log(this.props.posts)
       return(
        <div>
            <Route exact path="/" render={()=>(
               <div>
                <Title title={'Photowall'}/>
                <PhotoWall posts={this.props.posts}/>
               </div>
            
            )}/>    
            {/* <Route path="/AddPhoto" render= {({history})=> (
               <AddPhoto onaddPhoto={(addedPost)=>{
                  this.addPhoto(addedPost);
                  console.log(history.push);
                  history.push('/');
               }}/>
            )}/> */}
             
         </div>  
            
       );
    }
  }



  export default Main