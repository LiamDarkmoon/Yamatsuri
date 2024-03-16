import Image from "next/image"

const StoreList = () => {
    const stores= [
        {
            id: 1,
            name: "Fuego Tiene",
            address: "121 Main St",
            logo: "/fuegotiene.png"
        },
        {
            id: 2,
            name: "Bam Peluches",
            address: "122 Main St",
            logo: "/bam.jpg"
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
    ]

    return (
        <article className="text-center my-4 min-w-full">
            <h3 className="mb-4 text-2xl font-semibold text-purple"> Nos Acompañan: </h3>
            <ul className="flex justify-evenly">
                {stores.map(store => (
                    <li key={store.id}
                        className="text-purple text-lg font-medium"
                    >
                        <Image
                            className="rounded-full"
                            src={store.logo}
                            alt={store.name}
                            width={150}
                            height={150}
                        />
                        <h5>{store.name}</h5>
                        <p>{store.address}</p>
                    </li>
                    )
                )
            }
            </ul>
        </article>
    )
}

export default StoreList;