 const fetchData = (pokemonName?: string) => {

  let path;
  if(!pokemonName) { 
    path = '?offset=0&limit=1008'
  } else {
    console.log("endpoint name is true")
    path = `${pokemonName}`
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