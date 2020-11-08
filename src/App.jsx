import React, { useState } from 'react';
import ToDoList from './toDoList';

function App(){

    const[inputList,setinputList] = useState("");
    const [ Items, setItems] = useState([]);
    // setinputList("Buy" + inputList);
    
    const itemEvent= (event)=> {
        setinputList(event.target.value);
    }


    // const onSubmits = (event) =>{
    //     event.default();
    //     return(

    //         setinputList("Buy " + inputList )
    //     )
        
    //     // setinputList("Buy" + event.target.value )
    //     // const val = event.target.value
    // }

    const listOfItems = () => {
        setItems((oldItems) => {
            return[...oldItems, inputList];
        })
        setinputList ("");
    }

    const deleteItem = (id) => {
        // console.log('Clicked')
        setItems((oldItems) => {
            return(
                oldItems.filter((arrElem, index) => {
                    return index !== id;
                })

            )
        })
    }






    return(
    <>
    <div className = "main_div">
        <div className = "center_div">
            <h1> To Do List </h1>
            <input type= "text" placeholder = "Add an Item" onChange = {itemEvent}
            value= {inputList} />
            <button className= "add" onClick = {listOfItems}>+</button>

            <ol>
                {Items.map((itemval, index) => {
                    return(
                    <ToDoList 
                        key = {index}
                        id={index}
                        text = {itemval}
                        onSelect = {deleteItem}
                    />

                    )
                })}
            </ol>
        </div>
    </div>
    </>

    )
}
export default App;