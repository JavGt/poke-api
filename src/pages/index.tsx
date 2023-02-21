import { pokeApi } from '@/api';
import { PokemonCard } from '@/components/pokemons/PokemonCard';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { Grid } from '@nextui-org/react';
import { NextPage, GetStaticProps } from 'next';
import Layouts from '../components/Layouts/Layouts';

export interface HomeProps {
	pokemons: SmallPokemon[];
}

const meta = {
	title: 'Home',
	description: 'This is the home page',
	author: 'John Doe',
	keywords: ['nextjs', 'react', 'typescript'],
};

const Home: NextPage<HomeProps> = ({ pokemons }) => {
	return (
		<Layouts meta={meta}>
			<Grid.Container gap={2} justify='flex-start'>
				{pokemons.map(pokemon => (
					<Grid xs={6} sm={3} md={2} xl={1} key={pokemon._id}>
						<PokemonCard pokemon={pokemon} />
					</Grid>
				))}
			</Grid.Container>
		</Layouts>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async ctx => {
	const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

	const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => ({
		_id: index + 1,
		name: pokemon.name,
		url: pokemon.url,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
			index + 1
		}.svg`,
	}));

	return {
		props: {
			pokemons,
		},
	};
};
