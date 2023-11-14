import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React, { useState } from 'react'


const AddTask = ({setTasksHandler, tasks}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const onChangeSetTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeSetDescription = (event) => {
        setDescription(event.target.value)
    }

    const onClickAddHandler = (event) =>{
        event.preventDefault();
        if (!title || !description) {
            alert("Por favor, completa todos los campos para mejor experiencia :)");
            return;
        }
        const id = Math.random();
        setTasksHandler([
            ...tasks,
            {id: id, title: title, description: description}
        ]);
    }


    return (
        <Form className='w-50 p-3 border rounded -flex flex-column justify-content-center align-items-center'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Tarea por hacer</Form.Label>
                <Form.Control type="text" placeholder="Escriba aquí" 
                onChange={onChangeSetTitle}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" placeholder="Escriba aquí" 
                onChange={onChangeSetDescription}/>
            </Form.Group>
            <Button type="submit" variant="primary"  onClick={onClickAddHandler}>
                Submit
            </Button>
        </Form>
    )
}

export default AddTask