import './home.scss';
import React, {useState, useEffect} from 'react';
import { BashCommand } from '../../components/components';
import axios from 'axios';

const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function Home() {
    const [ip, setIP] = useState('');

    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        setIP(res.data.IPv4)
    }

    useEffect(() => {
        //passing getData method to the lifecycle method
        getData()

    }, [])

    var today = new Date();

    return (
        <div className='content'>
            <p>Welcome to my website!</p>
            {/* <p>Last login: {days[today.getDay()]} {months[today.getMonth()]} {today.getDate()} {today.getHours()}:{today.getMinutes()}:{today.getSeconds()} {today.getFullYear()} from {ip}</p> */}
            <p>Last login: {days[today.getDay()]} {months[today.getMonth()]} {today.getDate()} {today.getHours()}:{today.getMinutes()}:{today.getSeconds()} {today.getFullYear()} from {ip}</p>
            <BashCommand blink={true}/>
        </div>
    );
}

