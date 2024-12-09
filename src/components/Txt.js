import React, { useState } from 'react'
import RNav from './RNav'
import Login from './subCompos/Login'
import Signup from './subCompos/Signup'
import Leetcode10 from './subCompos/Leetcode10';
import Leetcode11 from './subCompos/Leetcode11';
import Leetcode12 from './subCompos/Leetcode12';
import Leetcode13 from './subCompos/Leetcode13';
import Logout from './subCompos/Logout';
import Home from './subCompos/Home';
import { Navigate, useNavigate } from 'react-router-dom';


function Txt({ page, setPage }) {
    const navigate = useNavigate();

    let componentToRender;

    switch (page) {
        case "Login":
            componentToRender = null;
            navigate("/Login")
            break;
        case "Signup":
            componentToRender = null;
            navigate("/Signup")
            break;
        case "Leetcode10":
            componentToRender = <Leetcode10 />
            break;
        case "Leetcode11":
            componentToRender = <Leetcode11 />
            break;
        case "Leetcode12":
            componentToRender = <Leetcode12 />
            break;
        case "Leetcode13":
            componentToRender = <Leetcode13 />
            break;
        case "Logout":
            componentToRender = <Logout />
            break;
        case "Home":
            componentToRender = false;
            navigate('/Home')
            break;
        default:
            break;
    }

    return (
        <>
        {componentToRender?componentToRender:<></>}
        </>
    )
}

export default Txt