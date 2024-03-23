import StoreList from './ui/StoreList';
import EventTimer from './ui/EventTimer';

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <section className="relative bg-bg-img bg-no-repeat bg-cover bg-center flex flex-col items-center h-screen min-w-full">
        <div className="flex flex-col items-center text-center h-1/2 w-full pt-40">
          <h1 className="text-5xl font-bold text-purple-tones-50 mb-2">Yamatsuri</h1>
          <h3 className="text-2xl font-semibold text-purple-tones-50 w-10/12 mb-2">¡Unite a Nosotros para una Experiencia Anime Inolvidable!</h3>
          <p className="text-xl font-medium italic text-purple-tones-50">&quot;Hagamos historia juntos&quot;</p>
        </div>
          <EventTimer/>
      </section>
      <section className="flex flex-col h-screen bg-purple-tones-900 items-center justify-evenly px-6 sm:px-12">
        <article className="text-center w-full sm:w-9/12">
          <h2 className="text-3xl font-bold text-purple-tones-50">¿Qué es Yamatsuri?</h2>
          <p className="text-xl text-purple-tones-50 my-4">
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
          <h2 className="text-3xl font-bold text-purple-tones-50 pb-4">¿Que puedo encontrar en el evento?</h2>
          <ul className="text-purple-tones-50">
            <li className="text-purple-tones-50 font-medium">
              Concurso de Cosplay
            </li>
            <li className="text-purple-tones-50 font-medium">
              Juegos, Karaoke, Trivias
            </li>
            <li className="text-purple-tones-50 font-medium">
              Presentaciones
            </li>
            <li className="text-purple-tones-50 font-medium">
              Sorteos
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
