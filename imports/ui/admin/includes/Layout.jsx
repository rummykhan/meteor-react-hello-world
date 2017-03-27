import React, {Component} from 'react';
import Navigation from './Navigation';

class Layout extends Component {
    render() {
        const {location, children} = this.props;
        return (
            <div>
                <Navigation location={location}/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout;