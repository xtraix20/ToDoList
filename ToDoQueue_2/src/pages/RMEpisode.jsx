import { useState, useEffect } from 'react'
import React from 'react'
import '../styles/RMEpisode.sass'

const EpisodeCard = ({ episode }) => (
  <div className="cardData">
    <h2>{episode.name}</h2>
    <div> Air date:  {episode.air_date}</div>
    <div> Episode: {episode.episode}</div>
  </div>
);

const RMEpisode = () => {

  const [data, setData] = useState(null)
  const [page, setPage] = useState(1)
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode?page=' + page)
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
      <h1 className="Text3"> EPISODES </h1>
      <div className="Entity">
        <ul className="episodeCard">
          {data?.results?.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RMEpisode