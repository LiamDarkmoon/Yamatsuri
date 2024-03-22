'use client'
import { useState } from "react";
import { Calendar } from '@geist-ui/icons';

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
            name: 'Kyo evento de primavera',
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
                <div className="absolute w-[340px] right-0 bottom-12 bg-yellow-tones-200 rounded-lg p-4">
                    <h1 className="font-semibold text-xl mb-2">Calendario de eventos</h1>
                    <ul>
                        { events.map((event, index) => (
                            <li 
                                className="flex flex-col gap-2 p-2"
                                key={index}
                                >
                                <span>{event.organisation}:  {event.name}</span>
                                <span>{`${event.start.toLocaleDateString()} ${event.start.toLocaleTimeString()}` } </span>
                                { index < events.length -1 ? <span className="border-b border-b-yellow-tones-500"></span> : null }
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </button>
    )
}

export default EventCalendar;