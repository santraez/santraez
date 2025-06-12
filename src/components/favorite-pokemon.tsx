import { useState } from 'preact/hooks'

import { FavoritePokemonCard } from './favorite-pokemon-card'
import type { FavoritePokemon } from '@/interfaces/favorite-pokemon'

const getLocalStorage = (): FavoritePokemon[] => {
  return JSON.parse(localStorage.getItem('favorites') ?? '[]')
}

export function FavoritePokemon() {
  const [pokemon] = useState<FavoritePokemon[]>(getLocalStorage())

  return (
    <div class='grid grid-cols-2 sm:grid-cols-4'>
      {pokemon.map(pkm => <FavoritePokemonCard key={pkm.id} pokemon={pkm} />)}
    </div>
  )
}
