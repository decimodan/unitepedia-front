export default function PokemonLayout ({children}) {
    return (
        <div>
            <p>Filtros</p>
            <button>Melee</button>
            <button>Ranged</button>
            {children}
        </div>
    )
}