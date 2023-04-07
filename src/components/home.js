import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';



const Home = () => {
    const [userName, setUserName] = useState('')
    console.log(userName)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitForm = async () => {
        const formData = new FormData()
        await formData.append('username', userName);
        await formData.append('email', email);
        await formData.append('password', password)
        
        let url = 'http://127.0.0.1:8000/profiles/users/'
        axios.post(
            url,
            formData
        ).then(async (res) => {
        setUserName('')
        setEmail('')
        setPassword('')
        console.log('Form reset')
        })
        
    }
    return (
        <>
            <div>
                <Container sx={{
                    left: '35%',
                    top: '20%',
                    position: 'absolute',
                    height: '50vh',

                }}
                    maxWidth="xs">
                    <Box
                        sx={{
                            p: 2
                        }}>
                        <h1>Sign Up</h1>
                        <Divider />
                    </Box>
                    <Box
                        sx={{
                            p: 2
                        }}
                    >
                        <TextField
                            label='Username'
                            variant='standard'
                            onChange={async (e) => {
                                await setUserName(e.target.value)
                            }}
                            value={userName}
                        />
                    </Box>
                    <Box
                        sx={{
                            p: 2
                        }}
                    >
                        <TextField
                            label='Email'
                            variant='standard'
                            onChange={async (e) => {
                                await setEmail(e.target.value)
                            }}
                            value={email}
                        />
                    </Box>
                    <Box
                        sx={{
                            p: 2
                        }}
                    >
                        <TextField
                            label='Password'
                            variant='standard'
                            type='password'
                            onChange={async (e) => {
                                await setPassword(e.target.value)
                            }}
                            value={password}
                        />
                    </Box>
                    <Box
                        sx={{
                            p: 2
                        }}
                    >
                        <Button onClick={submitForm} variant="outlined">Submit</Button>
                    </Box>
                </Container>
            </div>
        </>
    )
}


export default Home;