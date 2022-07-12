import { Input } from '@mantine/core';

export default function CharacterSearch({
  setSearchInput,
}: {
  setSearchInput: Function;
}): JSX.Element {
  return (
    <Input
      placeholder="Search..."
      onChange={(e: any) => setSearchInput(e.target.value)}
    />
  );
}
