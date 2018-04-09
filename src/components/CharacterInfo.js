import React from 'react'
// import Loader from './Loader'

const CharacterInfo = ({ character: { name, height, mass } }) => (
    <tr>
        <td className="tg-yw41">{name}</td>
        <td className="tg-yw41">{height}</td>
        <td className="tg-yw41">{mass}</td>
    </tr>
)

export default CharacterInfo
// export default Loader(CharacterInfo)