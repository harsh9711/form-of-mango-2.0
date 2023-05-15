import React,{useState} from 'react';
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Listcomp from "./Listcomp";
const Todolisting=()=>
{
const[item,setItem]=useState("buy any apple");
const[newitem,setNewItem]=useState([]);
const itemEvent=(event)=>{
setItem(event.target.value);
};
const listofitems=()=>{
setNewItem((prevValue)=>{
return [...prevValue,item]
});
}

return(
<>
<div className='main_div'>
    <div className='center_div'>
    <br/>
    To DO LISTS
    <br/>
    <br/> 
    <input type="text" placeholder="add an item" onChange={itemEvent}/>
    <Button className='newBtn' onClick={listofitems}>
    <AddIcon/>
    </Button>   
    <ol>
    {newitem.map((val,index )=>{
     return<Listcomp key={index} text={val}/>;   
    })}
    </ol>
    <br/>
    </div>
</div>
</>
);
};
export default Todolisting;