import React, {Component} from 'react';


class CreateUsers extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            age: '',
            btnText:'Create User',
            btnEnabled: true
        };
    }

    handleChange(e) {
        const {key, value} = e.target;

        this.setState({key: value});
    }

    enableButton(){

    }
    
    disableButton(){

    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-6 col-lg-offset-3">

                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" className="form-control"
                               onChange={this.handleChange.bind(this)}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Age</label>
                        <input type="text" name="age" className="form-control" onChange={this.handleChange.bind(this)}/>
                    </div>

                    <div className="form-group">
                        <input type="button" className="btn btn-primary btn-sm" value="Create User" />
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateUsers;