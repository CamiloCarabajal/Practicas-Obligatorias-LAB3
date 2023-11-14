import React from 'react'

import "../tasksList/taskList.css"

import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';

const TasksList = ({ listEmpty, setTasksHandler }) => {


    return (
        <div>
            {listEmpty.length === 0 ? "EXCELENTE! No tienes tareas por hacer!" : listEmpty.map((task) => {
                return <Toast className={task.completed ? 'completed-task' : ''} key={task.id} onClose={() => setTasksHandler(listEmpty.filter(t => t.id !== task.id))}>
                    <Toast.Header className='d-flex justify-content-center' >
                        <strong className="me-auto">{task.title}</strong>
                    </Toast.Header>
                    <Toast.Body>{task.description}</Toast.Body>
                    <Button variant={task.completed ? 'danger' : 'success'}
                       onClick={() => setTasksHandler(listEmpty.map(t => t.id === task.id ? {...t, completed: !t.completed } : t))}>
                        {task.completed ? 'Desmarcar' : 'Marcar como Completada'}
                    </Button>

                </Toast>
            })}
        </div>
    )
}

export default TasksList