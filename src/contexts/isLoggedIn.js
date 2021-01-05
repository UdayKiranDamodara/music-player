import React, { useState, createContext } from 'react'

export const isLoggedInContext = createContext()

const IsLoggedInContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return(
        <isLoggedInContext.Provider value={[isLoggedIn, setIsLoggedIn]} >
            {props.children}
        </isLoggedInContext.Provider>
    )
}

export default IsLoggedInContextProvider