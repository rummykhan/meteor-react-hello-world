import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';

class CreateUsers extends Component {
    constructor() {
        super();

        this.state = {
            user: {
                name: '',
                age: '',
            },
            btnText: 'Create User',
            btnEnabled: true
        };
    }

    handleChange(e) {
        const {name, value} = e.target;

        const {user} = this.state;
        user[name] = value;

        this.setState({user});
    }

    enableButton() {
        this.setState({btnText: 'Create User', btnEnabled: true});
    }

    disableButton() {
        this.setState({btnText: 'Creating User...', btnEnabled: false});
    }

    createUser() {
        let {user} = this.state;
        this.disableButton();

        Meteor.call('users.insert', user);

        user.name = '';
        user.age = '';

        this.setState({user});

        this.enableButton();
    }

    render() {
        const {btnText, btnEnabled, user} = this.state;
        return (
            <div className="row">
                <div className="col-lg-6 col-lg-offset-3">

                    <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" className="form-control" value={user.name}
                               onChange={this.handleChange.bind(this)}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Age</label>
                        <input type="text" name="age" className="form-control" value={user.age}
                               onChange={this.handleChange.bind(this)}/>
                    </div>

                    <div className="form-group">
                        <input type="button" className="btn btn-primary btn-sm" onClick={this.createUser.bind(this)}
                               value={btnText} disabled={!btnEnabled}/>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateUsers;