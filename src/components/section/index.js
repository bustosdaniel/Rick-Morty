import React, {useEffect, useState} from 'react'
import CardContainer from '../card'
import '../section/index.css'
import { GetCharacters } from '../../api/index'

export default function SectionCard() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    getCharacters()
  }, [])

  const getCharacters = () => {
    setLoading(true)
    GetCharacters()
      .then((response) => {
        setCharacters(response.results)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  } 

  return (
    <section className='section-app'>
      {loading 
      ? <div> loading </div> 
      : <div className='character-app'>
        {characters.map((character) => {
          return (
            <CardContainer key={character.id} {...character} />
          )
        })}
      </div>
      }
    </section>
  )
}
