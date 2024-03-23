'use client'
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { ArrowLeft } from '@geist-ui/icons/';
import { ArrowRight } from '@geist-ui/icons/';

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
            logo: "/jazba.png"
        },
        {
            id: 5,
            name: "MiteKudasai",
            address: "125 Main St",
            logo: "/mite.png"
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
            logo: "/jazba.png"
        },
        {
            id: 9,
            name: "MiteKudasai",
            address: "125 Main St",
            logo: "/mite.png"
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
            logo: "/jazba.png"
        },
        {
            id: 13,
            name: "MiteKudasai",
            address: "125 Main St",
            logo: "/mite.png"
        },
    ]

    return (
        <article className="relative text-center my-4 max-w-full">
            <h3 className="mb-8 text-2xl font-semibold text-purple-tones-50"> Nos Acompañan: </h3>
            <div ref={storeSlideRef}
                 className="w-full overflow-x-scroll no-scrollbar"
            >
                <button onClick={()=> handleSlide(-vw)} className={"hidden absolute top-1/2 left-0 text-purple-tones-50 sm:block"}>
                    <ArrowLeft/>
                </button>
                <button onClick={()=> handleSlide(vw)} className="hidden absolute top-1/2 right-0 text-purple-tones-50 sm:block">
                    <ArrowRight/>
                </button>
                <ul className="w-max px-10 flex justify-between gap-7">
                    {stores.map(store => (
                        <li key={store.id}
                            className="block text-purple-tones-50 text-lg font-medium w-40"
                        >
                            <Image
                                className="rounded-full mx-auto"
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