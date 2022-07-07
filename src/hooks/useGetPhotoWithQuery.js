import { useQuery, gql } from '@apollo/client';
const query = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`;

export const useGetPhotWithQuery = (id)=>{
  const { loading, error, data } = useQuery(query, {
    variables: {
      id: id
    }
  })
  return { loading, error, data }
}
