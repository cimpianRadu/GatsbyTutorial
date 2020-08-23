module.exports = {
    siteMetadata:{
        title: `Radu Cimpian's Site`,
        description: 'This is my personal website where'
    },
    plugins: [
        'gatsby-plugin-emotion', 
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/components/layout.js')
                },
                gatsbyRemarkPlugins: ['gatsby-remark-images'],
                plugins: ['gatsby-remark-images'],
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: 'posts'
            } 
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: 'images'
            } 
        },
        {
            resolve: 'gatsby-source-instagram',
            options: {
                username: '8385666633',
            },
        },
        {
            resolve: 'gatsby-plugin-webpack-bundle-analyzer',
            options: {
                production: true,
                disable: !process.env.ANALYZE_BUNDLE_SIZE, // this plugin will work only if this env variable (ANALYZE_BUNDLE_SIZE) is true
                generateStatsFile: true,
                analyzerMode: 'static'
            }
        }
    ],
}