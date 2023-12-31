import { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

function Search() {
  const [name, setName] = useState("");
  const [getLocations, { data, loading, error }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS
  );

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() =>
          getLocations({
            variables: { name },
          })
        }
      >
        Search
      </button>

      {loading && <div>loading...</div>}
      {error && <div>Something went wrong</div>}
      {data && (
        <div>
          <ul>
            {data.characters.results.map((character) => (
              <li>{character.location.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
