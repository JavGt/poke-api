import { Container, Image, Text } from '@nextui-org/react';

export interface NotFavoritesInterface {}

const NotFavorites: React.FC<NotFavoritesInterface> = () => {
	return (
		<Container
			css={{
				display: 'flex',
				flexDirection: 'column',
				height: 'calc(100vh - 100px)',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Image
				src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/51.svg'
				width={250}
				height={250}
			/>
			<Text h1>No favorites</Text>
		</Container>
	);
};

export default NotFavorites;
