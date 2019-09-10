import gql from 'graphql-tag';

export const GET_KEYWORDS = gql`
{
    keywords{
      id
      keyword
      resultSet{
        id
        nbSale
        date
      }
    }
  }
`;