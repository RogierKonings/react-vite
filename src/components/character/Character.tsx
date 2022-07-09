import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { ICharacter } from "../../models/character.models";

export default function Character(character: ICharacter): JSX.Element {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  const { name, status, species, type, gender, created, image } = character;

  return (
    <div style={{ width: 340, margin: "auto" }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={image} height={160} alt="Norway" />
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>{name}</Text>
          <Badge color="pink" variant="light">
            {status}
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          <p>{species}</p>
          <p>{type}</p>
          <p>{gender}</p>
          <p>{created}</p>
        </Text>

        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Book classic tour now
        </Button>
      </Card>
    </div>
  );
}
