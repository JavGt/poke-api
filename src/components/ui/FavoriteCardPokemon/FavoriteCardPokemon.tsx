import { Card, Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';

export interface FavoriteCardPokemonInterface {
	pokemonId: number;
}

const FavoriteCardPokemon: React.FC<FavoriteCardPokemonInterface> = ({ pokemonId }) => {
	const router = useRouter();

	const onFavoriteClick = () => router.push(`/pokemon/${pokemonId}`);

	return (
		<Grid xs={6} sm={3} md={2} xl={1}>
			<Card isHoverable isPressable onClick={onFavoriteClick} css={{ padding: '10px' }}>
				<Card.Image
					src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
					width='100%'
					height={140}
				/>
			</Card>
		</Grid>
	);
};

export default FavoriteCardPokemon;
