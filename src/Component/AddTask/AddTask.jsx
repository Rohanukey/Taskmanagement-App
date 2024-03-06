/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Css from './AddTask.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddTask() {
    const navigate = useNavigate();
    const url = "http://localhost:3000/tasks/";
    const [apidata, setApidata] = useState([]);
    const [inputs, setInputs] = useState({
        name: "",
        message: "",
    });

    useEffect(() => {
        axios.get(url)
            .then((resp) => setApidata(resp.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const deletetask = (id) => {
        axios.delete(url + id)
            .then(() => {
                setApidata(prevData => prevData.filter(task => task.id !== id));
            })
            .catch((error) => console.error('Error deleting', error));
    };

    return (
        <>
            <div className={Css.ContentWrapper}>
                <div className={Css.Greeting}>
                    <h2>Hi Rohan how are you today..</h2>
                </div>
                <div className={Css.btn}>
                    <button onClick={() => navigate("/Form")}>Add new Task</button>
                </div>
                <div className={Css.TaskWrapper}>
                    {apidata.map((task) => (
                        <div key={task.id} className={Css.Task}>
                            <h3>Label : {task.name}</h3>
                            <h4>{task.message}</h4>
                            <button>Update</button>
                            <div className={Css.delWrapper}>
                                <button className={Css.deletebtn} onClick={() => deletetask(task.id)}><img src="https://img.icons8.com/ios/50/trash--v1.png" alt="trash--v1" /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default AddTask;
