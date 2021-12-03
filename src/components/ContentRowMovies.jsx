import React from 'react'
import CardInfoMovies from './CardInfoMovies'

let cardsContent = [
    {
        id: 1,
        title: "Movies in Data Base",
        borderColor: "primary",
        quantity: 21,
        icon: "fa-film",
    },
    {
        id: 2,
        title: "Total awards",
        borderColor: "success",
        quantity: 79,
        icon: "fa-award",
    },
    {
        id: 3,
        title: "Actors quantity",
        borderColor: "warning",
        quantity: 49,
        icon: "fa-user",
    },
]



const ContentRowMovies = () => {
    return (
        <div className="row">
            {
                cardsContent.map(item => <CardInfoMovies id={item.id} title={item.title} borderColor={item.borderColor} icon={item.icon} quantity={item.quantity}/>)
            }

        </div>
    )
}

export default ContentRowMovies;