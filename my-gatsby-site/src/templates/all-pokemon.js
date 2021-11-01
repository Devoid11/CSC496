import React from "react"
import Layout from '../components/layout'

export default function AllPokemon({ pageContext: { allPokemon } }) {
  return (
    <Layout pageTitle = "Home">
    <div>
      <ul>
        {allPokemon.map(pokemon => (
          <li key={pokemon.id}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>
      </div>
      </Layout>
  )
}