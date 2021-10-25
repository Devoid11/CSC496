import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <dl>
      {
        data.allWpPost.nodes.map(node => (
          <dt key={node.slug}>
            <b>{node.slug}</b>
            <dd>
                {node.content}
            </dd>
          </dt>
        ))
        }
      </dl>
    </Layout>
  )
}   

export const query = graphql`
  {
    allWpPost {
      nodes {
        slug
        content
      }
    }
  }
`

export default BlogPage


/*
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`*/
