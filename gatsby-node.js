const path = require('path');

exports.createPages = async ({ graphql, actions }) => {


    const { createPage } = actions;


    const post = path.resolve('./src/templates/post.js');


    await graphql(
        `
                {
                    allMarkdownRemark {
                        edges {
                          node {
                            html
                            headings {
                              depth
                              value
                            }
                            frontmatter {
                              # Assumes you're using title in your frontmatter.
                              title
                              path
                            }
                          }
                        }
                      }
                }

                `
    ).then((result) => {

        if (result.errors) {
            reject(result.errors);
        }

        const posts = result.data.allMarkdownRemark.edges;




        posts.forEach(async ({ node }) => {
            const { frontmatter } = node;

            await createPage(
                {
                    path: frontmatter.path,
                    component: post,
                    context: {
                        path: frontmatter.path
                    }

                }
            )
        })


        return;
    })



}