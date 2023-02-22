 const fetchData = (pokemonId: string) => {

    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(`An error occurred: status ${response.status}`);
        }
      })
}
export default fetchData;