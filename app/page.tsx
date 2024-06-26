import StoreList from './ui/StoreList';
import EventTimer from './ui/EventTimer';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <main className="flex flex-col">
      <section className="relative bg-bg-img bg-no-repeat bg-cover bg-center flex flex-col items-center h-screen min-w-full">
        <div className="flex flex-col items-center text-center h-1/2 w-full pt-32">
          <h1 className="text-5xl font-bold mb-4">Yamatsuri</h1>
          <h3 className="text-3xl font-semibold w-1/2 mb-2 text-yellow-200">¡Unite a Nosotros y a la comunidad local para una Experiencia Anime Inolvidable!</h3>
          <p className="text-xl font-medium italic">&quot;Hagamos historia juntos&quot;</p>
        </div>
          <EventTimer/>
      </section>
      <section className="flex flex-col h-screen bg-purple-tones-900 items-center justify-evenly px-6 sm:px-12">
        <article className="text-center w-full sm:w-9/12">
          <h2 className="text-3xl font-bold">¿Qué es Yamatsuri?</h2>
          <p className="text-xl my-4">
            Yamatsuri es una convención de anime hecha por <b>Fans</b> para <b>Fans</b>.
            Sabemos lo que les gusta por que a nosotros tambien nos gusta, 
            y por eso queremos disfrutan con ustedes en cada evento, 
            apoyamos y contamos con el apoyo de <b>Stands</b>, locales y regionales: 
          </p>
        </article>
        <StoreList/>
      </section>
      <section className="flex flex-col justify-center items-center py-10 text-purple">
        <article className="flex flex-col items-center w-full min-h-screen py-6">
          <h3 className="text-4xl sm:text-6xl font-semibold pb-4">Consursos</h3>
          <p className="w-10/12 text-lg font-medium pb-10 sm:w-8/12 text-center">
            En el evento podrás encontrar consursos para que puedas divertirte, 
            poner a prueba tu pasion, determinasion y esfuerzo, 
            y quien sabe a lo mejor puedas ganar un premio.
          </p>
          <div className="flex flex-wrap h-3/4 justify-between items-center py-8">
            <div className="w-10/12 pb-6 sm:w-2/5 mx-auto sm:p-0">
              <h4 className="text-3xl font-semibold pb-2">¡Concurso de cosplay!</h4>
              <p className="text-lg font-medium pb-2">
                El plato principal para muchos, en el concurso de cosplay podras brillar con tu creatividad, 
                elige un personaje para personificar y disfruta la experiencia junto a otros fans mientras admiran tu trabajo. 
                ¿Que esperas? si destacas por tu carisma y te gusta estar en el centro de las miradas. ¡entra y gana!
              </p>
            </div>
            <Image
              src="/li-bg.png"
              alt="Cosplayer concurso de cosplay"
              width={600}
              height={400}
              className="sm:rounded-l-xl"
            />
          </div>
          <div className="flex flex-wrap-reverse h-3/4 justify-between items-center py-8">
            <Image
                src="/li-bg.png"
                alt="Cosplayer concurso de cosplay"
                width={600}
                height={400}
                className="sm:rounded-r-xl"
              />
            <div className="w-10/12 pb-6 sm:w-2/5 mx-auto sm:p-0">
              <h4 className="text-xl font-semibold pb-2">¡Concurso de Baile(Kpop) y de Dibujo!</h4>
              <p>
                El algunas de nuestras ediciones contamos con la colavoracion de expertos en dichas disiplinas, 
                y por lo tanto damos lugar a que uds demuestren su nivel y maestria compitiendo de una forma amistosa, 
                con su ayuda para guiarlos en el proceso y  listos para dar feedback junto a los resultados.
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
