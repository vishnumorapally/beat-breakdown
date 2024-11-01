import React from 'react'
import "./form.css"
import { Link } from 'react-router-dom'

const Form = () => {
    return (
        <div className='all-form'>
            <h1 className='title'>Select Mode</h1>
            <div className='form-container'>
                <div className='form'>
                    <h1>Form</h1>
                    <div className='rows'>
                        <div className='row-form'>
                            <span className='labels'>Name</span>
                            <input className='selctives' placeholder='Enter Name' />
                        </div>

                        <div className='row-form'>
                            <span className='labels'>Year</span>
                            <div className='selctives'>
                                <select>
                                    <option value="fruit">>1990</option>
                                    <option value="vegetable">1990-2010</option>
                                    <option value="meat">2010-2024</option>
                                </select>
                            </div>
                        </div>

                        <div className='row-form'>
                            <span className='labels'>Language</span>
                            <div className='selctives'>
                                <select>
                                    <option value="fruit">Telugu</option>
                                    <option value="vegetable">Hindi</option>
                                    <option value="meat">English</option>
                                </select>
                            </div>
                        </div>

                        <div className='row-form'>
                            <span className='labels'>Level</span>
                            <div className='selctives'>
                                <select>
                                    <option value="fruit">Easy</option>
                                    <option value="vegetable">Medium</option>
                                    <option value="meat">Hard</option>
                                </select>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className='jdf'>
                <Link to="/game" className='btnstart'>Start Game</Link>
            </div>
        </div>
    )
}

export default Form
