import { useCharacters } from "../hooks/useCharacters";
import "./CharactersList.css";

function CharacterList() {
  const { loading, error, data } = useCharacters();

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
