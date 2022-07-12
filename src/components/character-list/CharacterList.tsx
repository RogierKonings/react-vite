import { ICharacter } from '../../models/character.models';
import Character from '../character/Character';
import './CharacterList.scss';

export default function CharacterList({
  characters,
}: {
  characters: ICharacter[];
}): JSX.Element {
  return (
    <ul className="character-list">
      {characters.map((character: ICharacter) => (
        <li className="character-list-item" key={character.id}>
          <Character {...character} />
        </li>
      ))}
    </ul>
  );
}
