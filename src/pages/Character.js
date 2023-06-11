import { useParams } from "react-router-dom";
import { useCharacter } from "../hooks/userCharacter";
import "./Character.css";

function Character() {
  const { id } = useParams();
  const { data, error, loading } = useCharacter(id);

  if (loading) return <div>loading...</div>;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className="character">
      <img src={data.character.image} width={750} height={750} alt="" />
      <div className="character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="character-episode">
          {data.character.episode.map((episode) => (
            <div>
              {episode.name} - <b>{episode.episode}</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Character;
