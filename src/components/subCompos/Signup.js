import React, { useState, useEffect } from 'react'
import Alert from 'react-bootstrap/Alert';

import './formStyle.css'


function Signup() {
    const [register, setRegister] = useState({ "Fullname": "", "Username": "", "Email": "", "Password": "", "PasswordTwo": "", "Checkbox": false })
    const [alert, setAlert] = useState(false)
    const [userNameExist, setUserNameExist] = useState(
        {
            "status": false,
            "name": ""
        }
    )

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setRegister({ ...register, [name]: checked });
        } else {
            setRegister({ ...register, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (register.Password !== register.PasswordTwo) {
            alert("Passwords don't match");

        } else {

            const formData = {
                "fullname": register.Fullname,
                "username": register.Username,
                "email": register.Email,
                "password": register.Password,
                "checkbox": register.Checkbox
            };
            console.log(formData)
            const response = await fetch('http://localhost:8000/registerUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json();
            console.log(data)
            if (data.ok) {
                console.log("Registered")
                setAlert(true);
            }
            else {
                console.log("Can't do")
            }
        }
    }

    useEffect(() => {

        if (register.Username) {
         //   checkUserName();
        }

    }, [register.Username])

    const checkUserName = async () => {
        const response = await fetch(`http://localhost:8000/check?username=${register.Username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        if (response.ok) {
            setUserNameExist({ status: true, name: data.name }); // Correct state update
        } else {
            setUserNameExist({ status: false, name: "" });
        }
    }

    return (
        <>
            <form className='form' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Enter your Fullname'
                    name='Fullname'
                    value={register.Fullname}
                    onChange={handleChange} />
                <input
                    type='text'
                    placeholder='Enter your UserName'
                    name='Username'
                    value={register.Username}
                    onChange={handleChange} />
                <input
                    type='email'
                    placeholder='Enter your email'
                    name='Email'
                    value={register.Email}
                    onChange={handleChange} />
                <input
                    type='password'
                    placeholder='Enter your password'
                    name='Password'
                    value={register.Password}
                    onChange={handleChange} />
                <input
                    type='password'
                    placeholder='Re-enter your password'
                    name='PasswordTwo'
                    value={register.PasswordTwo}
                    onChange={handleChange} />
                <label>
                    <input
                        type='checkbox'
                        name='Checkbox'
                        checked={register.Checkbox}
                        onChange={handleChange} />
                    Select if you wish to receive email notifies
                </label>

                <button type='submit'>Submit</button>
            </form>
            {alert? 
            <Alert>
                <>ck it out!</>
            </Alert>:<></>}
        </>
    )
}

export default Signup