export const fetchData = (pokemon) => {
    let path;
    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(`An error occurred: status ${response.status}`);
        }
      })
}
