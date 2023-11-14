
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TasksList from '../tasksList/TasksList';
import AddTask from '../addTask/AddTask';

import React, { useState } from 'react'
const listEmpty = [] //Para agregar las tareas


const Dashboard = ({isLoggedInHandler}) => {
    const [tasks, setTasks] = useState(listEmpty)



    const onClickButtonHandler = () => {
        isLoggedInHandler(false);
    }

    const setTasksHandler = (value) => {
        setTasks(value);
    }

    return (
     <div>
        <div className="dashboard-container">
            <Row>
                <Col className='d-flex justify-content-center'>
                <Button onClick={onClickButtonHandler} className="m-3" variant="secondary">Cerrar sesión</Button></Col>
            </Row>
            <AddTask setTasksHandler = {setTasksHandler}
            tasks = {tasks}/>

            <TasksList listEmpty={tasks} setTasksHandler = {setTasksHandler}/>
        </div>
    </div>
    )
}

export default Dashboard