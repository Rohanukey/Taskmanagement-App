/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import Css from "./Taskcomp.module.css"
import axios from 'axios'

function Taskcomp() {

    const url = "http://localhost:3000/tasks"
    const [apidata, setApidata] = useState([])

    useEffect(() => {

        axios.get(url)
            .then((resp) => (setApidata(resp.data)))
            .catch(error => console.error('Error fetching data:', error));
    }, [])


    return (
        <>
            <div className={Css.Addtask}>
                <h3></h3>
            </div>
        </>
    )
}

export default Taskcomp