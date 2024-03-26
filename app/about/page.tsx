import Image from 'next/image';

export default function AboutPage() {
    return (
        <main className="flex felx-col min-h-screen justify-center p-20 text-center text-purple-tones-900">
            <section className="flex flex-wrap-reverse items-center justify-between">
                <article className='w-full flex flex-col justify-center sm:w-1/2'>
                    <h1 className="text-2xl font-bold w-4/5 mb-4 sm:text-4xl">Otakus para otakus, una familia para la comunidad</h1>
                    <p className="mt-4 italic text-sm w-4/5">
                        &apos;Desde el primer momento en que nos preguntamos que le hacia falta a la comunidad <b>Otaku</b> 
                        de la ciudad nos pusimos una meta, nuestra idea fue siempre y sigue siendo la de construir una comunidad firme y  
                        mas unida que nunca. Dandole lugar a cada pequeña mayoria o minoria del <b>Fandom</b>, 
                        el sueño es verlos a todos abrazando este mismo fin,
                        <b>Kpopers</b>, <b>Otakus</b>, <b>Geeks</b>, <b>Gamers</b>. 
                        Todos forman parte la comunidad y son parte de la familia.&apos;
                    </p>
                </article>
                <Image
                    src="/couple.png"
                    alt="Pareja de otakus felices abranzandose"
                    width={500}
                    height={400}
                    className='w-screen sm:w-[500px]'
                />
            </section>
        </main>
    )
}  