'use client'
import { useState } from "react";
import { Calendar } from '@geist-ui/icons';
import Image from "next/image";

const EventCalendar = () => {

    const [show, setShow] = useState(false)

    const events = [
        {
            organisation: 'kyomu',
            name: 'Mafia Event',
            start: new Date('2023-04-13, 13:00'),
        },
        {
            organisation: 'Yamatsuri',
            name: 'Yamatsuri Mitad de año',
            start: new Date('2023-06-09, 14:00'),
        },
        {
            organisation: 'kyomu & Yamatsuri',
            name: 'Kyo primavera',
            start: new Date('2023-09-15, 14:00'),
        },
    ]

    const handleShowUp = () =>{
        setShow(!show)
    }

    return(
        <button 
            className="calendar-btn"
            onClick={handleShowUp}
        >
            <Calendar/>
            {
                show && 
                <div className="absolute w-[345px] right-0 bottom-12 glass rounded-lg p-6 pt-20 shadow-md">
                    <Image
                        src="/Yamatsuri-logo.png"
                        alt="Next event logo"
                        width={100}
                        height={100}
                        className="absolute -top-12 left-[122px] rounded-full border-4 border-yellow"
                    />
                    <h1 className="font-semibold text-xl mb-2">Calendario de eventos</h1>
                    <ul>
                        { events.map((event, index) => (
                            <li 
                                className="flex flex-col gap-2 p-2"
                                key={index}
                                >
                                <span className="font-medium">{event.organisation}:  {event.name}</span>
                                <span>{`${event.start.toLocaleDateString()} ${event.start.toLocaleTimeString()}` } </span>
                                { index < events.length -1 ? <span className="border-b border-b-purple-tones-800"></span> : null }
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </button>
    )
}

export default EventCalendar;