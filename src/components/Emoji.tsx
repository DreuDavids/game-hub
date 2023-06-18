import { Text } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating <= 3) return <Text marginTop={1}>&#129300;</Text>;
  else if (rating === 4) return <Text>&#128077;</Text>;
  else return <Text>&#127919;</Text>;
};

export default Emoji;
