import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const contact = (req, res) => {
  new Promise(async (resolve, reject) => {
    const url = process.env.REACT_APP_CONTACT_API_URL || '';
    const subject = process.env.REACT_APP_CONTACT_SUBJECT || '';
    const source = process.env.REACT_APP_CONTACT_SOURCE || '';
    const destination = process.env.REACT_APP_CONTACT_DESTINATION || '';
    const api_key = process.env.REACT_APP_CONTACT_API_KEY || '';

    const { body } = req;
    try {
      const result = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'authorization': process.env.DISCORD_API_KEY
        },
        body: JSON.stringify(body)
      });
      const resultBody = await result.json();
      res.status(200).json(resultBody);
      resolve(resultBody);

    } catch (error) {
      console.log(error);
      res.status(404).json({ "status": "failed" });
      reject({ "status": "failed" });
    }
  })
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
