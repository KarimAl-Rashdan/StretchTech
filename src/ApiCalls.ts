 const fetchData = (pokemonName?: string) => {

  let path;
  if(!pokemonName) { 
    path = '?offset=0&limit=1008'
  } else {
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
const fetchFive = () => {  
  return fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=5")
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(`An error occurred: status ${response.status}`);
      }
    })
}



export {fetchData, fetchFive}