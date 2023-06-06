import Image from 'next/image'
import Link from 'next/link'

const fecthPokemons = () => {
  return fetch('https://unitepediaback.fly.dev/api/v1/pokemon', {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export async function ListOfPokemon () {
  const pokemons = await fecthPokemons()
  const listOfPokemon = pokemons.data
  // console.log(listOfPokemon)

  return listOfPokemon.map(pokemon => (
    <article className='list' key={pokemon.name}>
      <Link href='/pokemon/[id]' as={`/pokemon/${pokemon.name}`}>
        <Image width='150' height='150' className='pokemonThumbnail' alt={pokemon.thumbnail} src={pokemon.thumbnail} />
        <p>{pokemon.name}</p>
      </Link>
    </article>
  ))
}
