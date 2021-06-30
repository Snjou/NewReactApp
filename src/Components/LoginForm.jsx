import React from 'react'
import './Component.css'
function LoginForm() {
    return (
        <div className= "login">
            <form action="">
                <h2>Login</h2>
                <input type="email"required/>
                <input type="password"required/>
                <input type="submit"/>

            </form>
        </div>
    )
}

export default LoginForm
