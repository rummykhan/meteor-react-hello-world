import React, {Component} from 'react';

class Guest extends Component {
    render() {
        const {children} = this.props;
        return (
            <div style={{marginTop: '150px'}}>
                <div className="row">
                    <div className="col-lg-6 col-lg-offset-3">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                A D M I N I S T R A T O R
                            </div>
                            <div className="panel-body">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Guest;