import Image from 'next/image';

export default function AboutPage() {
    return (
        <main className="flex felx-col min-h-screen justify-center p-8 text-center text-purple-tones-900 sm:p-20">
            <section className="flex flex-wrap-reverse items-center justify-between pt-5">
                <article className='w-full flex flex-col items-center mt-[500px] p-8 sm:w-1/2 sm:m-0'>
                    <h1 className="text-2xl font-bold sm:w-4/5 mb-4 sm:text-4xl">Otakus para otakus, una familia para la comunidad</h1>
                    <p className="mt-4 italic text-sm sm:w-4/5">
                        &quot;Desde el primer momento en que nos preguntamos que le hacia falta a la comunidad <b>Otaku </b> 
                        de la ciudad nos pusimos una meta, nuestra idea fue siempre y sigue siendo la de construir una comunidad firme y  
                        mas unida que nunca. Dandole lugar a cada pequeña mayoria o minoria del <b>Fandom</b>, 
                        el sueño es verlos a todos abrazando este mismo fin,
                        <b> Kpopers</b>, <b>Otakus</b>, <b>Geeks</b>, <b>Gamers</b>. 
                        Todos forman parte la comunidad y son parte de la familia.&quot;
                    </p>
                </article>
                <Image
                    src="/couple.png"
                    alt="Pareja de otakus felices abranzandose"
                    width={500}
                    height={400}
                    className='absolute top-[90px] left-0 right-0 w-screen sm:w-[500px] sm:rounded-xl sm:relative sm:top-auto'
                />
            </section>
        </main>
    )
}  