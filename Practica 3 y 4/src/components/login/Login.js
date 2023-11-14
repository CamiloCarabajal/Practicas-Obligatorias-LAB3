import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import React, { useState } from 'react'
import { useNavigate } from 'react-router';


const Login = ({ isLoggedInHandler }) => {
    const [user, setUser] = useState("");

    const navigate = useNavigate();

    const onChangeUserHandler = (event) => {
        setUser(event.target.value);
        const userStringArray = user.split("");

        if (userStringArray.includes("O") || userStringArray.includes("o")) {
            alert("Ingrese el usuario sin la letra *O*")
        }
    }

    const onClickRegisterHandler = (event) => {
        event.preventDefault();
        const userStringArray = user.split("");

        if (userStringArray.includes("O") || userStringArray.includes("o") || userStringArray.length === 0) {
            alert("Usuario inválido para registrarse")
            return;
        }

        isLoggedInHandler(true)
        setUser("");
        navigate("/home");
    }

    return (
        <div className='vh-100 d-flex justify-content-center align-items-center'>
            <Form className='w-25 border rounded p-4'>
                <Form.Group className="mb-3">
                    <Form.Label className= 'd-flex justify-content-center align-items-center'>Ingresa tu usuario</Form.Label>
                    <Form.Control type="text" placeholder="Usuario" onChange={onChangeUserHandler}/>
                </Form.Group>
                <Button type="submit" variant="primary" onClick={onClickRegisterHandler}>
                    Iniciar sesión
                </Button>
            </Form>
        </div>
    )
}

export default Login