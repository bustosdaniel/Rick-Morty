import axios from 'axios'

const URL =  'https://rickandmortyapi.com/api'

export const GetCharacters = async() => {
  const { data } = await axios.get(`${URL}/character`)
  return data
}