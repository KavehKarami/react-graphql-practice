import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;
export function useCharacters() {
  const queryResult = useQuery(GET_CHARACTERS);

  return { ...queryResult };
}
