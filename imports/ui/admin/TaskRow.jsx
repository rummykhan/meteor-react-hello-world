import React from 'react';
import Actions from './Actions';

const TaskRow = (props) => {
    const {task, onDelete, onEdit} = props;
    return (
        <tr>
            <td>{task.name}</td>
            <td>{task.title}</td>
            <td>
                <Actions task={task} onEdit={onEdit} onDelete={onDelete}/>
            </td>
        </tr>
    )
};

export default TaskRow;