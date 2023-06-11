import { useQuery, gql } from "@apollo/client";
import "./CharactersList.css";

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

function CharacterList() {
  const { loading, data, error } = useQuery(GET_CHARACTERS);

  if (loading) return <div>loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="characterList">
      {data.characters.results.map((character) => (
        <div key={character.id}>
          <img src={character.image} alt="" />
          <h2>{character.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default CharacterList;
