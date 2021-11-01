/*const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allWpPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  const postTemplate = path.resolve(`./src/templates/post.js`)
  result.data.allWP.edges.forEach(edge => {
    createPage({
      path: edge.node.slug,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
}*/

const axios = require("axios")
const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`)
const getPokemonData = names =>
  Promise.all(
    names.map(async name => {
      const { data: pokemon } = await get(`/pokemon/${name}`)
      return { ...pokemon }
    })
  )
exports.createPages = async ({ actions: { createPage } }) => {
  const allPokemon = await getPokemonData(["mew", "ditto", "squirtle"])
  createPage({
    path: `/pokemon`,
    component: require.resolve("./src/templates/all-pokemon.js"),
    context: { allPokemon },
  })
}