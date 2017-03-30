import React, {Component} from 'react';

class Actions extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {task, onEdit, onDelete} = this.props;

        return (
            <div className="btn-group">
                <a href="#" onClick={e => onEdit(e, task)} className="btn btn-default btn-sm">Edit</a>
                <a href="#" onClick={e => onDelete(e, task)} className="btn btn-danger btn-sm">Delete</a>
            </div>
        )
    }
}

export default Actions;