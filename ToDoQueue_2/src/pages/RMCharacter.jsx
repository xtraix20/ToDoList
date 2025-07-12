import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = ({ character }) => (
  <div className="cardData">
    <h2>{character.name}</h2>
    <img className="cardImg" src={character.image} alt={character.name}  />
    <div> Status: {character.status}</div>
    <div> Specie: {character.species}</div>
    <div> Gender: {character.gender}</div>
    {character.type && <div>{character.type}</div>}
  </div>
);

const RMCharacter = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  const returnToPageOne = () => {
    setPage(1);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='general'>
      <div className='ButtonsEntity'>
        <Link to="/RMEpisode">
        <button className='btn-API'> 
        EPISODES
        </button>
        </Link>
        <Link to="/RMLocation">
        <button className='btn-API'> 
        LOCATIONS
        </button>
        </Link>
        <Link to="/RMCharacter">
        <button className='btn-API'> 
        CHARACTER
        </button>
        </Link>
        </div>
      <div className="Buttons">
        <button className="btn-API" onClick={returnToPageOne}>
          Return to page one
        </button>
        <button className="btn-API" onClick={previousPage} disabled={page === 1}>
          Previous Page
        </button>
        <button className="btn-API" onClick={nextPage}>
          Next Page
        </button>
      </div>
      <div> 
      
        <h1 className="Text3"> CHARACTERS </h1>
        <div className="Entity">
          <ul className='characterCard'>
            {data?.results?.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RMCharacter;
