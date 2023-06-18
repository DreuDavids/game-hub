import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import logo from "../assets/logo.webp";

interface Props {
  game: Game;
}
/**
 * GameCard UI, displays the game object
 */
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={
          game.background_image !== null
            ? getCroppedImageUrl(game.background_image)
            : logo
        }
      />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
