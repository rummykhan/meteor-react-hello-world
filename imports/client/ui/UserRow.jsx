import React from 'react';
import Actions from './Actions';

const UserRow = (props) => {
    const {user} = props;
    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>
                <Actions user={user}/>
            </td>
        </tr>
    )
};

export default UserRow;