'use client'
import { useRef, useState, useEffect } from "react"
import Image from "next/image"

const StoreList = () => {

    const storeSlideRef = useRef<HTMLDivElement>(null)
    const [vw, setVw] = useState<any>()
    
    useEffect(() => {
        setVw(storeSlideRef.current?.offsetWidth)
    }, [vw])

    const handleSlide = (offSet: number) => {
        if (storeSlideRef.current){
            storeSlideRef.current.scrollLeft += offSet
        }
    }

    const stores= [
        {
            id: 1,
            name: "Fuego Tiene",
            address: "121 Main St",
            logo: "/fuegotiene.png"
        },
        {
            id: 3,
            name: "Gato de Trapo",
            address: "123 Main St",
            logo: "/gatodetrapo.png"
        },
        {
            id: 4,
            name: "Jazba",
            address: "124 Main St",
            logo: "/jazba.jpg"
        },
        {
            id: 5,
            name: "MiteKudasai",
            address: "125 Main St",
            logo: "/mite.jpg"
        },
        {
            id: 6,
            name: "Fuego Tiene",
            address: "121 Main St",
            logo: "/fuegotiene.png"
        },
        {
            id: 7,
            name: "Gato de Trapo",
            address: "123 Main St",
            logo: "/gatodetrapo.png"
        },
        {
            id: 8,
            name: "Jazba",
            address: "124 Main St",
            logo: "/jazba.jpg"
        },
        {
            id: 9,
            name: "MiteKudasai",
            address: "125 Main St",
            logo: "/mite.jpg"
        },
        {
            id: 10,
            name: "Fuego Tiene",
            address: "121 Main St",
            logo: "/fuegotiene.png"
        },
        {
            id: 11,
            name: "Gato de Trapo",
            address: "123 Main St",
            logo: "/gatodetrapo.png"
        },
        {
            id: 12,
            name: "Jazba",
            address: "124 Main St",
            logo: "/jazba.jpg"
        },
        {
            id: 13,
            name: "MiteKudasai",
            address: "125 Main St",
            logo: "/mite.jpg"
        },
    ]

    return (
        <article className="relative text-center my-4 max-w-full">
            <div ref={storeSlideRef}
                 className="w-full overflow-x-scroll no-scrollbar"
            >
                <button onClick={()=> handleSlide(-vw)} className="absolute top-1/2 left-0">
                    L <svg xmlns="http://www.w3.org/2000/svg" fill="purple" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"></svg>
                </button>
                <button onClick={()=> handleSlide(vw)} className="absolute top-1/2 right-0">
                    R <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"></svg>
                </button>
                <h3 className="mb-4 text-2xl font-semibold text-purple"> Nos Acompañan: </h3>
                <ul className="w-max px-10 flex justify-between gap-10">
                    {stores.map(store => (
                        <li key={store.id}
                            className="block text-purple text-lg font-medium w-40 h-40"
                        >
                            <Image
                                className="rounded-full"
                                src={store.logo}
                                alt={store.name}
                                width={140}
                                height={140}
                            />
                            <h5 className="text-semibold italic">{store.name}</h5>
                            <p>{store.address}</p>
                        </li>
                        )
                    )
                }
                </ul>
            </div>
        </article>
    )
}

export default StoreList;