import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export let fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': '4189a58748mshc4a71365d6ae853p173cd0jsn21f534bb2237',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    }
  })

  return data
}
