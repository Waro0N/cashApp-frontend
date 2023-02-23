import React, { useState, useEffect } from "react";



const Home = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitForm = async () => {
        const formData = new FormData()
        await formData.append('username', userName);
        await formData.append('email', email);
        await formData.append('password', password)

        
    }
    return (
        <> 
            <div>
                <label for="fname">Username:</label><br />
                <input
                    onChange={async (e) => {
                        await setUserName(e.target.value)
                    }}
                    type="text"
                    id="fname"
                    name="fname" /><br />
                <label for="email">Email:</label><br />
                <input
                    onChange={async (e) => {
                        await setEmail(e.target.value)
                    }}
                    type="text"
                    id="emial"
                    name="email"></input><br />
                <label for="password">Password:</label><br />
                <input
                    onChange={async (e) => {
                        await setPassword(e.target.value)
                    }}
                    type="password"
                    id="password"
                    name="password"></input>
                <button onClick={submitForm}>Signup</button>
            </div>
        </>
    )
}


export default Home;