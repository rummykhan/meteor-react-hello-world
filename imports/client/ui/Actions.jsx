import React, {Component} from 'react';

class Actions extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="btn-group">
                <a href="" className="btn btn-default btn-sm">Edit</a>
                <a href="" className="btn btn-danger btn-sm">Delete</a>
            </div>
        )
    }
}

export default Actions;