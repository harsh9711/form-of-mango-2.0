import React,{useState} from "react";
import DeleteIcon from '@material-ui/icons/Delete';
const Listcomp=(props)=>{
    const[line,setline]=useState(false);
    const cutit=()=>{
        setline(true);
    };   
    return( 
    <div className="todo_style">
    <span onClick={cutit}>
        <DeleteIcon className="deleteicon "/>
    </span>
 <li style={{textDecoration: line?'line-through':'none'}} >
{props.text} 
</li>
</div>);
};
export default Listcomp;
