import React ,{Component} from "react";



const tasks=['take out the trash','shovel the driveway','walk the dog']

class List extends Component {
    render(){
      return (
        <ol>
              {tasks.map((tasks,index)=> <li key={index}>{tasks}</li>)}
              </ol>
      );
         
    }
  }

  export default List