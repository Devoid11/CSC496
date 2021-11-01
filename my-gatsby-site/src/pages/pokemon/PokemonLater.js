/*import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
const PokePage = ({data}) => {
  return (
      <Layout pageTitle= {data.allPokemon.edges.nodes.name}>
          <p>My pokemon stuff will go here (eventually)sdasd.</p>
          <p>{data.allPokemon.nodes.name}</p>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
  allPokemon(filter: {id: {eq: $id}}) {
    edges {
      node {
        name
      }
    }
  }
}
`
export default PokePage*/