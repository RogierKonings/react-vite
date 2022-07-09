import { useGetCharacters } from "./hooks/useRequest";
import CharacterList from "./components/character-list/CharacterList";
import CharacterFilter from "./components/character-filter/CharacterFilter";
import Layout from "./components/layout/Layout";
import { CharacterGenderEnum, ICharacter } from "./models/character.models";
import { useState } from "react";
import { throttle } from "lodash";

export default function App() {
  const [searchInput, setSearchInput] = useState("");
  const { data, error, isLoading, isSuccess } = useGetCharacters({
    name: searchInput,
    gender: CharacterGenderEnum.MALE,
  });

  const handleSearchInput = throttle(
    (input: string) => {
      setSearchInput(input);
    },
    1000,
    { leading: false }
  );

  return (
    <Layout>
      <CharacterFilter setSearchInput={handleSearchInput}></CharacterFilter>
      {isSuccess && (
        <CharacterList characters={data as ICharacter[]}></CharacterList>
      )}
      {isLoading && <h1>Loading....</h1>}
      {error && <h1>Something went horribly wrong!</h1>}
    </Layout>
  );
}
