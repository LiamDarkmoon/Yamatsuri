import Image from 'next/image';
import Link from 'next/link';
import StoreList from './ui/StoreList';
import EventTimer from './ui/EventTimer';

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <section className="relative bg-bg-image-slayers bg-no-repeat bg-cover bg-center flex justify-between h-screen min-w-full items-center bg-purple-tones-500 p-4 sm:bg-bg-image sm:bg-[length:1350px]">
        <Image
          className='m-auto sm:ms-10'
          src='/Yamatsuri-logo.png'
          alt='Yamatsuri Logo'
          width={350}
          height={350}
        />
        <div className="absolute right-0 left-0 text-center glass p-7 sm:left-auto sm:rounded-l-xl">
          <h1 className="text-5xl font-bold text-purple-tones-50 mb-2">Yamatsuri</h1>
          <h3 className="text-2xl font-semibold text-purple-tones-50 mb-2">La convencion que estabas esperando</h3>
          <p className="text-xl font-medium italic text-purple-tones-50">&quot;Hagamos historia juntos&quot;</p>
        </div>
          <EventTimer/>
      </section>
      <section className="flex flex-col h-screen items-center justify-evenly px-5 my-12 sm:px-12">
        <article className="text-center w-full sm:w-9/12">
          <h2 className="text-3xl font-bold text-purple">¿Qué es Yamatsuri?</h2>
          <p className="text-xl text-purple my-4">
            Yamatsuri es una convención de anime hecha por <b>Fans</b> para <b>Fans</b>.
            Sabemos lo que les gusta... por que a nosotros tambien nos gusta, y por eso queremos disfrutan con ustedes
            en cada evento, nos acompañan <b>Stands</b>, locales y tambien de localidades como: 
            Mar del Plata, olavarria, Necochea y Buenos Aires
          </p>
        </article>
        <StoreList/>
      </section>
      <section className="flex bg-bg-image-she bg-no-repeat bg-cover bg-center h-screen min-w-full items-center bg-purple-tones-500">
        <div className="glass p-8 pt-12 w-3/4 h-screen sm:w-2/4">
          <h2 className="text-3xl font-bold text-purple-tones-50">¿Que puedo encontrar en el evento?</h2>
        </div>
      </section>
    </main>
  );
}
