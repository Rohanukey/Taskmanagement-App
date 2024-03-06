/* eslint-disable no-unused-vars */
import { useState, useContext, useEffect } from 'react'
import ContactCss from './Login.module.css'
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom'




function ContactUs() {

    const navigate = useNavigate()

    const UserData = [
        { id: 1, username: "Tushar",  email: "tushar@gmail.com", pass: "123" ,  },
        { id: 2, username: "sham",  email: "tushar@gmail.com", pass: "123" , },
        { id: 3, username: "ram",  email: "tushar@gmail.com", pass: "123",  },
    ]


    



    

    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        pass: '',
    })


    useEffect(()=>(
        localStorage.setItem("NewUserData", JSON.stringify(UserData))
    ),[])



    const [error, setError] = useState({})
    const onhandleSubmit = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const ondatasumbit = (event) => {
        event.preventDefault();
        const check = UserData.some((predata)=> {
            return predata.username === inputs.username && predata.password === inputs.password
        })

        const errorValidation = {}
        if (!inputs.username.trim()) {
            errorValidation.username = "username is required"
        }
        if (!inputs.email.trim()) {
            errorValidation.email = "email is required"
        }
        if (!inputs.pass.trim()) {
            errorValidation.pass = "Password is required"
        }
        setError(errorValidation)

        if (Object.keys(errorValidation).length === 0 && check) {
            alert("Form submited successfully")
            navigate("/index")
        }

       
        




        const pre = JSON.parse(localStorage.getItem('UserData')) || []
        const current = [...pre, inputs]
        console.log(current)
        localStorage.setItem("UserData", JSON.stringify(current))


    }



    return (

        <>
            <div className={ContactCss.Page}>
                <form onSubmit={ondatasumbit}>
                    <div className={ContactCss.case}>
                        <h1>Login</h1>
                        <p>This is a Demo form for learning Protected route</p>
                        <label htmlFor='Name'>Name: </label>
                        <input type='text' name='username' placeholder='Enter Name' value={inputs.username} onChange={onhandleSubmit} />
                        {error.username && <span>{error.username}</span>}
                        <label htmlFor='Email'>Email: </label>
                        <input type='text' name='email' placeholder='Enter Email' value={inputs.email} onChange={onhandleSubmit}></input>
                        {error.username && <span>{error.email}</span>}
                        <label htmlFor='Pass'>Password: </label>
                        <input type='text' name='pass' placeholder='Enter Password' value={inputs.pass} onChange={onhandleSubmit}></input>
                        {error.username && <span>{error.pass}</span>}
                        <motion.button type='submit' whileHover={{ scale: 1.05 }} >Submit</motion.button>

                    </div>

                </form>
                <div className={ContactCss.Details}>
                    <div className={ContactCss.sub_details}>
                        <h3>Welcome to Task Management Web Application</h3>
                        <h4>Record your important dates</h4>
                        <h4>Schedule your future plans</h4>
                    </div>


                </div>
            </div>

        </>
    )


}


export default ContactUs;
