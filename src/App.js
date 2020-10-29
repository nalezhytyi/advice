import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import dots from './images/three-dots.svg'

const App = () => {
    const [advice, setAdvice] = useState('')
    const [delay, setDelay] = useState(true)

    useEffect(() => {
        fetchAdvice()
    }, [])

    const fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                const { advice } = response.data.slip;
                setDelay(true)
                setAdvice(advice)
                setTimeout(() => {
                    setDelay(false)
                }, 4500)
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <div className='app'>
            <div className='card'>
                <h1 className='heading'>{advice}</h1>
                <button onClick={fetchAdvice} className='button' disabled={delay}>
                    {delay ? <img src={dots} alt='loading' /> : <span>get advice</span>}
                </button>
            </div>
        </div>
    );

}

export default App;
