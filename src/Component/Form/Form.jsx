import React, { useState } from 'react';
import Css from './Form.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import VoiceToText from '../VoiceToText/VoiceToText';

function Form() {
    const navigate = useNavigate();
    const url = 'http://localhost:3000/tasks';
    const [inputs, setInputs] = useState({
        name: '',
        message: '',
    });

    const postdata = () => {
        axios
            .post(url, inputs)
            .then((resp) => {
                // Clear form fields after successful submission
                setInputs({
                    name: '',
                    message: '',
                });
                navigate('/index');
            })
            .catch((error) => console.error('Error posting data:', error));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postdata();
    };

    const handleVoiceInput = (voiceText) => {
        setInputs((prevInputs) => ({
            ...prevInputs,
            message: voiceText,
        }));
    };

    return (
        <>
            <div className={Css.FormWrapper}>
                <form onSubmit={handleSubmit} className={Css.Form}>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={inputs.name}
                        placeholder="Enter Task Label"
                        onChange={handleChange}
                    />
                    <br />
                    <label>Message</label>
                    <textarea
                        className={Css.Msg}
                        type="text"
                        name="message"
                        value={inputs.message}
                        onChange={handleChange}
                    />
                    <br />
                    {/* Add more input fields as needed */}
                    <button type="submit">Submit</button>
                    <button type="button" onClick={() => navigate('/index')}>
                        Back
                    </button>
                    <VoiceToText  onVoiceInput={handleVoiceInput} />
                </form>
            </div>
        </>
    );
}

export default Form;
