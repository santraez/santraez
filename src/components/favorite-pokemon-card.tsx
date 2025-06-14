import { useState } from 'preact/hooks'

import type { FavoritePokemon } from '@/interfaces/favorite-pokemon'

interface FavoritePokemonCardProps {
  pokemon: FavoritePokemon
}

export function FavoritePokemonCard({ pokemon }: FavoritePokemonCardProps) {
  const [isVisible, setIsVisible] = useState<boolean>(true)

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const deleteFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') ?? '[]') as FavoritePokemon[]
    const newFavorites = favorites.filter(pkm => pkm.id !== pokemon.id)

    localStorage.setItem('favorites', JSON.stringify(newFavorites))

    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }
  
  return (
    <div class='flex flex-col justify-center items-center'>
      <a href={`/pokemon/${pokemon.name}`}>
        <img
          src={imageSrc}
          alt={pokemon.name}
          width='96'
          height='96'
          style={`view-transition-name: ${pokemon.name}-image`}
        />

        <p class='capitalize'>
          #{pokemon.id} {pokemon.name}
        </p>
      </a>

      <button onClick={deleteFavorite} class='text-red-400'>
        Borrar
      </button>
    </div>
  )
}