const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    const result = await graphql(`
      query {
        notes: allFile(
          filter: {
            sourceInstanceName: { eq: "notes" }
            relativePath: { glob: "**/*.{md,mdx}" }
          }
          sort: { fields: relativePath, order: DESC }
        ) {
          nodes {
            id
            relativePath
            childMdx {
              frontmatter {
                title
                slug
                author
                published
              }
            }
          }
        }
        posts: allFile(
          filter: {
            sourceInstanceName: { eq: "posts" }
            relativePath: { glob: "**/*.{md,mdx}" }
            childMdx: { frontmatter: { published: { eq: true } } }
          }
          sort: { fields: relativePath, order: DESC }
        ) {
          nodes {
            id
            childMdx {
              frontmatter {
                title
                slug
                published
              }
            }
          }
        }
      }
    `);

    const posts = result.data.posts.nodes;
    posts.forEach(node => {
      createPage({
        path: node.childMdx.frontmatter.slug,
        component: require.resolve(`./src/templates/post.js`),
        context: { 
          slug: node.childMdx.frontmatter.slug,
          postPath: node.childMdx.frontmatter.slug
        }
      });
    });

    const notes = result.data.notes.nodes;
    notes.forEach(note => {
      var slug = note.childMdx.frontmatter.slug
      var path = `notes/${slug}`
      createPage({
        path: path,
        component: require.resolve(`./src/templates/note.js`),
        context: {
          slug: slug,
          postPath: path
        }
      })
    })
};

exports.onPreBootstrap = ({ store }, options) => {

    const { program } = store.getState();
    const contentPath = options.contentPath || "content";
    const dir = path.join(program.directory, contentPath);

    if (!fs.existsSync(dir)) {
        mkdirp.sync(dir)
    }
}
