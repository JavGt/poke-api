import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from '../FavoriteCardPokemon';

export interface FavoritePokemonsInterface {
	pokemons: number[];
}

const FavoritePokemons: React.FC<FavoritePokemonsInterface> = ({ pokemons }) => (
	<Grid.Container gap={2} direction='row' justify='flex-start'>
		{pokemons.map(pokemonId => (
			<FavoriteCardPokemon key={pokemonId} pokemonId={pokemonId} />
		))}
	</Grid.Container>
);

export default FavoritePokemons;
