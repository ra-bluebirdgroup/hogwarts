import React from 'react'
import HogTile from './HogTile'
const HogList = ({ hogs }) => {
    console.log(typeof hogs)
	return (
		<div id="tile-container">
            {hogs.map((hog, index) =>
                <HogTile
                    key={hog.name}
                    hog={hog}
                />
                )}
		</div>
	)
}
export default HogList
