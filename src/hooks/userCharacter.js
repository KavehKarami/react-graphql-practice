import { useQuery, gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
      id
      image
      episode {
        name
        episode
      }
    }
  }
`;

export function useCharacter(id) {
  const queryResult = useQuery(GET_CHARACTER, {
    variables: { id },
  });
  return { ...queryResult };
}
