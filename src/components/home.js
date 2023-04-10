import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid'; 
import nerd from '../assests/Saly-10.png'
import "../styles/style2.css"
import saly16 from '../assests/Saly-16.png'
import saly20 from '../assests/Saly-20.png'
import saly1 from '../assests/Saly-1.png'


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
        <div className="fig">

        <div className="fig_glass">
        
            <div className="form">
            
                <form action="" className="form2">
                <div>
            <h1 className="sar">
Welcome<br/> Back!
            </h1>
        </div>
                    <label htmlFor=""></label>
                    <input type="email" placeholder="Username/Email"/>

                    <label htmlFor=""></label>
                    <input type="password" placeholder="Password"/>

                    <div className="outro">
           
               Forgot Password?
           
        </div>
                    <div className='submit2'>
          <input  type="submit"/>
        </div>

        <div className="outro end">
            
                Don't have an account? <br></br>
                <span>Sign Up!</span>
            
        </div>
                </form>
            </div>



        </div>






        <div className="fig_nerdy">
        <img src={nerd} className="fig_nerdy_img" alt="logo" />
        </div>
        <div className="fig_cube"></div>
        <div className="fig_mushroom">
            <img src={saly16} alt="saly16" />
        </div>
        <div className="fig_ufo">
        <img src={saly20} alt="saly16" />
        </div>
        <div className="fig_rocket">
        <img src={saly1} alt="saly16" />
        </div>

            </div>


        </>
    )
}


export default Home;