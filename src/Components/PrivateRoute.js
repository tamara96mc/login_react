import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';


const PrivateRoute = ( {element: Element, ...rest}) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            props.credentials?.user.name  ?
                <Element {...props} />
            : <Navigate to="/login" />
        )} />
    );
};

export default connect((state) => ({
    credentials: state.credentials
}))(PrivateRoute);