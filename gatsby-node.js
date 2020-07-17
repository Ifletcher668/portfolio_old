const path = require('path');

// programmatically creates pages

// blog pages
exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions;

    const result = await graphql(
        `
            {
                blogs: allStrapiBlogs {
                    nodes {
                        slug
                    }
                }
                poems: allStrapiPoems {
                    nodes {
                        slug
                    }
                }
            }
        `
    );

    if (result.errors) return reporter.panicOnBuild(`Error while running GraphQl query`);

    result.data.blogs.nodes.forEach((blog) => {
        createPage({
            path: `writing/blogs/${blog.slug}`,
            component: path.resolve(`./src/templates/blog-template.tsx`), // the template
            context: {
                slug: blog.slug,
            },
        });
    });

    result.data.poems.nodes.forEach((poem) => {
        createPage({
            path: `writing/poetry/${poem.slug}`,
            component: path.resolve(`./src/templates/poem-template.tsx`),
            context: {
                slug: poem.slug,
            },
        });
    });
};
