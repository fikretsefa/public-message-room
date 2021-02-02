import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import Login from './Components/Login';
import Message from './Components/Message';

const _API_COUNTRY = "https://restcountries.eu/rest/v2/all";
const ENDPOINT = "localhost:4000";
let socket = undefined;

function App() {
  const [countries, setCountries] = useState([]);
  const [user, setUser] = useState();
  const [onlineUser, setOnlineUser] = useState(0);
  const [start, setStart] = useState(false);
  const [allMessages, setAllMessages] = useState([]);

  useEffect(() => {
    if (!start) {
      fetch(_API_COUNTRY)
        .then((res) => res.json())
        .then((data) => {
          const country = data.map((country) => ({
            name: country.name,
            alpha2Code: country.alpha2Code,
            flag: country.flag
          }));
          setCountries(country)
        })
        .catch(function (err) {
          console.log('Fetch Error :', err);
        });
    } else {
      getMessage();
      var messageBody = document.querySelector('#messageBody');
      messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
    }
  });

  const handleSubmit = (name, countryCode) => {
    const flaguri = countries.find(country => country.alpha2Code === countryCode).flag;
    const userInfo = { name: name, countryCode: countryCode, flaguri: flaguri };
    setUser(userInfo);
    socket = socketIOClient.connect(ENDPOINT);
    socket.emit('user_joined', userInfo);
    socket.on('user_id', (data) => { setUser({ ...user, id: data }) });
    setStart(true);
  };

  const handleResponse = (response) => {
    socket.emit('user_send_message', response);
  };

  function getMessage() {
    socket.on('all_message', (data) => {
      setAllMessages(data)
    });
    socket.on('online_users', (data) => {
      setOnlineUser(data)
    });
  }

  return (
    <div className="container flex flex-col justify-center items-center m-auto h-screen">
      {!start ? (<Login countries={countries} handleSubmit={handleSubmit}></Login>) :
        <Message messages={allMessages} user={user} handleResponse={handleResponse} onlineUser={onlineUser}></Message>
      }
    </div>
  );
}

export default App;
