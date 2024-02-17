import { useState, useEffect } from 'react'
import React from 'react'
import '../styles/RMLocation.sass'

const LocationCard = ({ location }) => (
  <div className="cardData">
    <h2>{location.name}</h2>
    <div> Type:  {location.type}</div>
    <div> Dimension: {location.dimension}</div>
  </div>
);

const RMLocation = () => {

  const [data, setData] = useState(null)
  const [page, setPage] = useState(1)
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/location?page=' + page)
   .then((response) => response.json())
   .then(data => setData(data))
  }, [page]);

  const nextPage = () => {
    setPage((page) => page + 1);
  };

  const previousPage = () => {
    setPage((page) => page - 1);
  };

  const returnToPageOne = () => {
    setPage((page) => page = 1);
  }

  return (
    <div>
      <div className='ButtonsEntity'>
        <a href="/RMEpisode " target = "blank">
        <button className='btn-API'> 
        EPISODES
        </button>
        </a>
        <a href="/RMLocation " target = "blank">
        <button className='btn-API'> 
        LOCATIONS
        </button>
        </a>
        <a href="/RMCharacter " target = "blank">
        <button className='btn-API'> 
        CHARACTER
        </button>
        </a>
        </div>
      <button className="btn-API" onClick={returnToPageOne}>
        Return to page one
      </button>
      <button className="btn-API" onClick={previousPage} disabled={page === 1}>
        Previous Page
      </button>
      <button className="btn-API" onClick={nextPage}>
        Next Page
      </button>
      <h1 className="Text3"> LOCATIONS </h1>
      <div className="Entity">
        <ul className="locationCard">
          {data?.results?.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RMLocation