import { Input } from "@mantine/core";

export default function CharacterFilter({
  setSearchInput,
}: {
  setSearchInput: Function;
}): JSX.Element {
  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue);
  };

  return (
    <Input
      placeholder="Search..."
      onChange={(e: any) => searchItems(e.target.value)}
    />
  );
}
