import React, {useContext} from "react";
import { isLoggedInContext } from "../../contexts/isLoggedIn";
import { backendURL } from "../../utils/backendUrl";
import './Admin.css'

const Admin = (props) => {

    let inputValue
    const [isLoggedIn, setIsLoggedIn] = useContext(isLoggedInContext)

    const submit = (event) => {
        event.preventDefault()
        fetch(`${backendURL}/admin-login`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                inputValue
            })
        }).then(res=>res.json())
            .then(data => {
                console.log(data)
                setIsLoggedIn(data.authenticated)
                props.history.push('./admin/add-song')
            })
    }

    return(
        <form className='form' onSubmit={event => submit(event)}>
            <input className='form-element' type='password' placeholder='Enter admin password' onChange={event=>{inputValue=event.target.value}}/>
            <button className='form-element' type='submit'>Log In</button>
        </form>
    )
}

export default Admin