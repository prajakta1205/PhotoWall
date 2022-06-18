import React ,{Component} from "react";
import  Title  from "./Title";
// import PhotoWall from "./PhotoWall";
 import AddPhoto from "./AddPhoto";
import {Link, Route} from "react-router-dom";
import PhotoWall from "./PhotoWall";
// import  removePost  from "../redux/action";

class Main extends Component {
   // constructor(){
   //    super()
   // }


    render(){
       console.log(this.props)
       return(
        <div>
            <h1>
               <Link to="/">Photowall</Link>
            </h1>
            <Route exact path="/" render={()=>(
               <div>
                {/* <Title title={'Photowall'}/> */}
                {/* <PhotoWall posts={this.props.posts}/> */}
                <PhotoWall {...this.props}/>
               </div>
            
            )}/>    
            <Route path="/AddPhoto" render= {({history})=> (
               <AddPhoto {...this.props} onHistory={history}/>
            )}/>
             
         </div>  
            
       );
    }
  }



  export default Main