import React, {Component} from 'react';

class Guest extends Component {
    render() {
        const {children} = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Guest Layout..</h1>
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Guest;