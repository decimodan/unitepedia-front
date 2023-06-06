import { ListOfPokemon } from './ListOfPokemon'

export default async function PokemonPage ({ params }) {
  return (
    <section className='pokemonList'>
      <ListOfPokemon />
    </section>
  )
}
