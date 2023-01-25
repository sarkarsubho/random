import React from 'react'

export default function Register() {

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
                    type = "text"
                    className = "location"
                    placeholder = "Location"
                />
                <br />
                <input
                    type = "text"
                    className = "interests"
                    placeholder = "What are your interests? Add comma separated values"
                />
                <br />
                <input
                    type = "password"
                    className = "password"
                    placeholder = "Enter password"
                />
                <br />
                <input  className = "submit" type = "submit"/>

            </form>                
        </div>
    )
}