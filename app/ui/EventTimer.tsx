'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const EventTimer = () => {

    const [countDown, setCountDown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    const eventName = 'Mafia Event'

   useEffect(() => {
    const CountDownDate = new Date('2024-04-13').getTime();

    const counting = setInterval(function() {


        const now = new Date().getTime();
        const distance = CountDownDate - now;

        // Time
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountDown({ days, hours, minutes, seconds });

   }, 1000);
   
   }, [countDown])

    return(
        <div className="timer flex flex-col items-center text-center w-10/12 sm:w-4/12">
            <Link className="btn w-5/12 my-5 shadow-lg shadow-purple" href="/tickets">Tickets</Link>
            <div className='counter-wraper justify-center p-4'>
                <h3 className="w-10/12 text-3xl">{eventName}</h3>
                <div className="counter w-16 h-16 text-center shadow-md shadow-purple sm:w-20 sm:h-20">
                    <span className='text-3xl'>{countDown.days}</span>
                    <span className="">Dias</span>
                </div>
                <div className="counter w-16 h-16 text-center shadow-md shadow-purple sm:w-20 sm:h-20">
                    <span className='text-3xl'>{countDown.hours}</span>
                    <span className="">Horas</span>
                </div>
                <div className="counter w-16 h-16 text-center shadow-md shadow-purple sm:w-20 sm:h-20">     
                    <span className='text-3xl'>{countDown.minutes}</span>
                    <span className="">Min</span>
                </div>
                <div className="counter w-16 h-16 text-center shadow-md shadow-purple sm:w-20 sm:h-20">       
                    <span className='text-3xl'>{countDown.seconds}</span>
                    <span >seg</span>
                </div>
            </div>
        </div>
    )
}

export default EventTimer;