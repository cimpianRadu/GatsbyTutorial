import { graphql, useStaticQuery } from 'gatsby';

const useInstagram = () => {
    const data = useStaticQuery(graphql`
      query {
        allInstaNode(limit: 5) {
          nodes {
            id
            caption
            username
            localFile {
              childImageSharp {
                fluid(maxWidth: 120, maxHeight: 120) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `);
    return data.allInstaNode.nodes.map(node => ({
      ...node.localFile.childImageSharp,
      id: node.id,
      caption: node.caption,
      username: node.username,
    }));
};

export default useInstagram;