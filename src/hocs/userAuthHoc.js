import React from 'react'
import {Navigate} from "react-router-dom";


export function userAuthHoc(Component) {
    let RedirectComponent = (props) => {
        if (props.userLogin === null) {
            return <Navigate to='/login'/>
        } else {
            return <Component {...props}/>
        }
    }
    return RedirectComponent
}


