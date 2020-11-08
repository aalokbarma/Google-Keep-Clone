import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const CreateNote = (props) => {
    const[expand,setexapand] = useState(false);

    const[note,setnote] = useState({
        title: "",
        content : "",
    });

    const inputEvent = (event) => {

        // const value = event.target.value;
        // const name = event.target.name;

        const { name, value} = event.target;

        setnote((prevData) => {
            // if(prevData.title === ""){
                return{
                    ...prevData,
                    [name]: value,
                };

            // }
            // else{
            //     alert("Please fill the Title field first")
            // }
        });
        // console.log(note)
    };

    const addEvent = () => {
        if(note.title === "" ){
            alert("Please Fill the Title Field First")
        }else{

            props.passNote(note);
        }
        setnote({
            title: "",
            content : "",
        });
    }

    const expandIt = () => {
        setexapand(true);
    }
    const backExpand = () => {
        setexapand(false);
    }



    return (<>
        <div className = 'main_note' onClick ={expandIt} onDoubleClick = {backExpand}>
            <form>
             
                <input className = "input_box" name="title" type = 'text' value={note.title} onChange ={inputEvent} placeholder = "Title" autoComplete = 'off' /> 
                {expand?
                <textarea className = "textarea" name="content" rows = "4" column = "" value={note.content} onChange ={inputEvent} placeholder = "Write a Note..."  />: null}
                {expand?
                <Button onClick = {addEvent} className = "add_btn">+</Button>:null}
            </form>
        </div>
    </>
    );

};

export default CreateNote;