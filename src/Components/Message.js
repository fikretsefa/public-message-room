import React from 'react';
import { useState } from 'react';

const Message = ({ messages, user, handleResponse, onlineUser }) => {
    const [response, setResponse] = useState("");
    
    return (
        <div className="flex flex-col w-full justify-center items-center m-10">
            <h1 className="text-2xl font-bold text-white text-center">There is a <span className="text-indigo-800">{onlineUser}</span> online user</h1>
            <div className="bg-white w-full p-6 shadow mt-6 rounded-lg" >
                <div className="d-block w-full h-96 border-4 border-indigo-500 mb-4 p-4 overflow-y-scroll" id="messageBody">
                    {messages && (messages.map(message => {
                        if (message.user.id !== user.id) {
                            return (
                                <div className="d-block w-full mb-4 bg-indigo-200 p-4">
                                    <div className="flex">
                                        <h1 className="text-xl font-bold text-indigo-800">{message.user.name}</h1>
                                        <img className="w-4 h-3 ml-1 mb-1 self-end" src={message.user.flaguri} alt="no image" />
                                    </div>
                                    <div className="flex-col">
                                        <h1 className="text-md font-bold text-indigo-500">{message.message}</h1>
                                        <h1 className="text-sm text-indigo-400">{message.time}</h1>
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div className="d-block w-full mb-4 bg-indigo-300 p-4">
                                    <div className="flex">
                                        <h1 className="text-xl font-bold text-indigo-900">{message.user.name}</h1>
                                        <img className="w-4 h-3 ml-1 mb-1 self-end" src={message.user.flaguri} alt="no image" />
                                    </div>
                                    <div className="flex-col">
                                        <h1 className="text-md font-bold text-indigo-600">{message.message}</h1>
                                        <h1 className="text-sm text-indigo-400">{message.time}</h1>
                                    </div>
                                </div>
                            )
                        }
                    }))}
                </div>
                <div className="flex flex-row">
                    <input className="d-block w-full border-4 border-indigo-500 mb-4 p-4 text-2xl font-bold text-indigo-800 placeholder-indigo-300"
                        type="text"
                        placeholder="Hi"
                        name="response"
                        id="messageArea"
                        autoComplete="off"
                        onInput={e => setResponse(e.target.value)} />
                    <button className="d-block w-1/6 bg-indigo-500 mb-4 p-4 text-2xl font-bold text-white text-center"
                        onClick={() => { handleResponse(response); document.querySelector('#messageArea').value = "" }}
                    >Send</button>
                </div>
            </div>
        </div>
    )
};
export default Message; 