import React from 'react'
import { RowBox } from './RowBox'

const boxInfo = [
    {
        id: 1,
        title: "Billy Elliot",
        duration: 123,
        rating: 5,
        genres: [
            "Drama",
            "Comedia"
        ],
        awards: 2
    },
    {
        id: 2,
        title: "Alicia en el pais de las maravillas",
        duration: 142,
        rating: 4.8,
        genres: [
            "Drama",
            "Accion",
            "Comedia"
        ],
        awards: 3
    }
]

export const BoxInformation = () => {
    return (
        <div>
            <table className="table table-bordered">
                <thead>
                   <tr>
                     <th scope="col" >Titulo</th>
                     <th scope="col">Duracion</th>
                     <th scope="col">Rating</th>
                     <th scope="col">Genero</th>
                     <th scope="col">Premios</th>
                   </tr>
                </thead>
                <tbody>
                    {
                        boxInfo.map(item => <RowBox id={item.id} title={item.title} duration={item.duration} rating={item.rating} genres={item.genres} awards={item.awards} />)
                    }
                </tbody>
                <thead>
                   <tr>
                     <th scope="col" >Titulo</th>
                     <th scope="col">Duracion</th>
                     <th scope="col">Rating</th>
                     <th scope="col">Genero</th>
                     <th scope="col">Premios</th>
                   </tr>
                </thead>
            </table> 
        </div>
    )
}
