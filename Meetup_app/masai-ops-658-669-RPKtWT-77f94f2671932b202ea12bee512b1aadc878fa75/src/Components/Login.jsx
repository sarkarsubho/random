import React from 'react'

export default function Login() {

    return (
        <div>
            <form className = "auth_form"  >
                <input
                    type = "name"
                    className = "name"
                    placeholder = "Enter Name"
                />
                <br />
                <input
                    type = "password"
                    className = "password"
                    placeholder = "Enter password"
                />
                <br />
                <input className = "submit" type = "submit"/>

            </form>    
        <h3 className='error-container'></h3>
        </div>
    )
}
