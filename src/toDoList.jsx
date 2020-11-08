import React from 'react';




const ToDoList = (props) => {

    if(props.text !== ""){
        return<li><button className = "cross" onClick = {() =>{
            props.onSelect(props.id)
        }}>X</button>Buy {props.text}</li>

    }
    else {
        return <> </>
    }

}; 
export default ToDoList;