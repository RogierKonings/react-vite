import { useGetCharacters } from './hooks/useRequest';
import CharacterList from './components/character-list/CharacterList';
import CharacterFilter from './components/character-search/CharacterSearch';
import { Layout, Main, Header } from './components/layout';
import { CharacterGenderEnum, ICharacter } from './models/character.models';
import { useState } from 'react';
import { throttle } from 'lodash';

export default function App() {
  const [searchInput, setSearchInput] = useState('');
  const { data, error, isLoading, isSuccess } = useGetCharacters({
    name: searchInput,
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
      <Header>
        <CharacterFilter setSearchInput={handleSearchInput}></CharacterFilter>
      </Header>
      <Main>
        {isSuccess && (
          <CharacterList characters={data as ICharacter[]}></CharacterList>
        )}
        {isLoading && <h1>Loading....</h1>}
        {error && <h1>Something went horribly wrong!</h1>}
      </Main>
    </Layout>
  );
}
