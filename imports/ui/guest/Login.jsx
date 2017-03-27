import React, {Component} from 'react';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: '',
                password: '',
            }
        }
    }

    handleChange(e) {
        let {user} = this.state;
        user[e.target.name] = e.target.value;
        this.setState({user});
    }

    handleSubmit(e) {
        e.preventDefault();
        const {user} = this.state;
        Meteor.loginWithPassword(user.email, user.password, (response) => {
            if( !!response ){
                alert(JSON.stringify(response));
            }else{
                window.location.href = '/users';
            }
        });
    }

    render() {
        const {user} = this.state;
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>

                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="text" name="email" className="form-control" value={user.email}
                           onChange={this.handleChange.bind(this)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" className="form-control" value={user.password}
                           onChange={this.handleChange.bind(this)}/>
                </div>

                <div className="form-group text-center">
                    <div className="btn-group">
                        <button type="Login" className="btn btn-primary btn-sm">Login</button>
                        <input type="reset" className="btn btn-default btn-sm" value="clear" />
                    </div>
                </div>

            </form>
        )
    }
}

export default Login;