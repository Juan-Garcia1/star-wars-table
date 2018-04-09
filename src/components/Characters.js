import React from 'react'
import CharacterInfo from './CharacterInfo'

import Loader from './Loader'

const Characters = ({ characters }) => (
    <table className="tg">
        <tr>
            <th className="tg-031e">Name</th>
            <th className="tg-yw41">Height</th>
            <th className="tg-yw41">Mass</th>
        </tr>
        {
            characters.map((character,i) => <CharacterInfo key={i} character={character} />)
        }

    </table>
)

export default Loader(Characters)