


export const getPokemon = async (pokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const res = await fetch(url)
    const data = await res.json()
    return data
}

