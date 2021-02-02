import React from 'react';
import { useState } from 'react';

const Login = ({ countries, handleSubmit }) => {
    const [name, setName] = useState("");
    const [countryCode, setCountryCode] = useState("tr");
    
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-white text-center">Welcome to the Public <span className="text-indigo-800">Socket.io</span> Chat Room</h1>
            <div className="bg-white w-2/5 p-6 shadow mt-6 text-center rounded-lg" >
                <input className="d-block w-full border-4 border-indigo-500 mb-4 p-4 text-2xl font-bold text-indigo-800 placeholder-indigo-300"
                    type="text"
                    placeholder="Your name, name ?"
                    name="response"
                    autoComplete="off"
                    onInput={e => setName(e.target.value)} />
                <select className="d-block w-full border-4 mb-4 border-indigo-500 p-4 text-xl font-bold text-indigo-800"
                    onChange={e => setCountryCode(e.target.value)} >
                    {countries && (countries.map((countries) => {
                        return (<option value={countries.alpha2Code}>{countries.name.substr(0, 45)}</option>)
                    }))}
                </select>
                <button className="d-block w-full bg-indigo-500 mb-4 p-4 text-2xl font-bold text-white text-center"
                    onClick={() => handleSubmit(name, countryCode)}
                >Let's be social</button>
            </div>
        </div>
    )
};
export default Login; 