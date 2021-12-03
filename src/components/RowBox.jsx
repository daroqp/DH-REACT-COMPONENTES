import React from 'react'
import PropTypes from 'prop-types';

export const RowBox = ({id=300, title="None Title", duration="0", rating="0", genres=[], awards="0"}) => {
    return (
        <tr key={id}>
            <th scope="row">{ title }</th>
            <td>{ duration }</td>
            <td>{ rating }</td>
            <td>
                <ul>
                    {
                        genres.map((genre, id) => <li key={id}> {genre} </li>)
                    }
                </ul>
            </td>
            <td>{ awards }</td>
        </tr>
    )
}


RowBox.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    duration: PropTypes.number,
    rating: PropTypes.number,
    genres: PropTypes.array,
    awards: PropTypes.number
}