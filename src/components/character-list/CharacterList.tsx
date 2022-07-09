import { ICharacter } from "../../models/character.models";
import Character from "../character/Character";

export default function CharacterList({
  characters,
}: {
  characters: ICharacter[];
}): JSX.Element {
  return (
    <ul>
      {characters.map((character: ICharacter) => (
        <li key={character.id}>
          <Character {...character} />
        </li>
      ))}
    </ul>
  );
}
