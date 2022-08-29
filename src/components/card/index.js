import React from 'react'
import './index.css'

export default function CardContainer(character) {
  const specie = `${character.status} - ${character.species}`
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={character.image} alt="imagen" />
      </div>
      <div className="card-content">
        <div>
          <h3>{character.name}</h3>
          <p>{specie}</p>
        </div>
        <div>
          <h4>Last known location:</h4>
          <a href={character.location.url}>{character.location.name}</a>
        </div>
        <div>
          <h4>First seen in:</h4>
          <a href={character.episode[0]}>episodio</a>
        </div>
      </div>
    </div>
  )
}
