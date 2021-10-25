/*import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPost = ({data}) => {
  return (
    <Layout pageTitle= {data.allWpPost.nodes.title}>
      <p>{data.allWpPost.nodes.content}.</p>
    </Layout>
  )
}



export const query = graphql`
  {
    allWpPost(filter: {id: {eq: $id}}) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`
*/

import * as React from 'react'
import Layout from '../../components/layout'
const BlogPost = () => {
  return (
    <Layout pageTitle="An experiment/work in progress">
      <p>My blog post contents will go here (eventually).</p>
    </Layout>
  )
}

export default BlogPost