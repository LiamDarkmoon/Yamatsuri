'use client'
import { useRef } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from '@geist-ui/icons/';

export default function ImageCarousel(){

    const carouselRef = useRef<HTMLDivElement>(null)
    const images = [
        '/img1.jpg',
        '/img2.jpg',
        '/img3.jpg',
        '/img4.jpg',
        '/img5.jpg',
        '/img6.jpg',
    ]

    return(
        <section className='relative flex flex-col bg-purple-tones-100 w-full h-full items-center text-center sm:w-10/12'>
            <button className='absolute h-full w-2/12 top-0 left-0 pl-[50px]'>
                <ArrowLeft/>
            </button>
            <button className='absolute h-full w-2/12 top-0 right-0 pl-[100px]'>
                <ArrowRight/>
            </button>
            <h1 className='text-2xl font-bold sm:text-3xl py-4'>Hall de la Fama</h1>
            <div className='flex flex-wrap justify-center gap-4 w-full h-full'>
                <Image
                    src="/img1.jpg"
                    alt="Dummy Photo"
                    width={750}
                    height={500}
                    className='hidden w-11/12 h-[65%] glass rounded-lg place-content-center sm:w-2/3 sm:block'
                />
                <div 
                    ref={carouselRef}
                    className='min-w-full w-max h-1/4 flex flex-wrap gap-1 overflow-scroll no-scrollbar px-6 pb-6 sm:flex-nowrap'
                >
                    {
                        images.map((image, index) => (
                            <Image 
                                key={index}
                                src={image}
                                alt="Dummy Carousel Photo"
                                width={270}
                                height={179}
                                className='h-full w-full sm:w-1/4 shrink-0 glass rounded-lg place-content-center'
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}