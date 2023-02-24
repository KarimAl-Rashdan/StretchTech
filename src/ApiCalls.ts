 const fetchData = (pokemonId: string) => {

  let path;
  if(!pokemonId) { 
    path = '?offset=0&limit=1008'
  } else {
    path = `${pokemonId}`
  }
  
  return fetch(`https://pokeapi.co/api/v2/pokemon/${path}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(`An error occurred: status ${response.status}`);
      }
    })
}
export default fetchData;