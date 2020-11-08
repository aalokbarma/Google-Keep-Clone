import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';


const Note = (props) => {


    const deleteNote = () => {
        props.deleteItem(props.id);
    }

    // const cssStyle = () => {
    //     return (
    //         display: "inlineFlex",
    //         position: "relative",
    //         height: "3rem",
    //         width: "1rem",
    //         background:  "rgb(0, 173, 173)",
    //         borderRadius: "50%",
    //         color: "blanchedalmond",
            
    //         boxShadow: "0 0.5rem 2rem rgb(8, 94, 94)"
            

    //     )
    // }

    return(
        <>
        <div className = "note">
            <h1 className = "del_head">{props.title}</h1>
            <p className = "del_para">{props.content}</p>
            <Button  classname = 'del_btn' onClick ={deleteNote} style ={{display: "inlineFlex",
            position: "relative",
            height: "3rem",
            width: "1rem",
            
            borderRadius: "50%",
            color: "red",
            top: "8%",
            left:'85%',
            
            
            boxShadow: "0 0.5rem 2rem rgb(8, 94, 94)"}} >
            <DeleteOutlineIcon classname = 'delete_sign' style = {{fontWeight: "bolder"}}/>

            </Button>
        </div>
    </>
        );

};

export default Note;