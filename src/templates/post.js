import React from "react"

import Layout from "../components/layout"

import { graphql } from 'gatsby'

const IndexPage = ({ data: { markdownRemark } }) => {
    console.log(markdownRemark);
    return (
        <Layout>

            <div>
                Post
            </div>


        </Layout >
    )
}


export const pageQuery = graphql`
    query PostPage($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
              data
              path
              title
            }
          }
    }

`

export default IndexPage
