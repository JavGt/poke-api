import { pokeApi } from '@/api';
import { Pokemon, PokemonListResponse } from '@/interfaces';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Layouts } from '@/components/Layouts';
import { useEffect, useState } from 'react';
import { localFavorites } from '@/utils';
import confetti from 'canvas-confetti';
import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import Image from 'next/image';

export interface PokemonByNamePageProps {
	pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<PokemonByNamePageProps> = ({ pokemon }) => {
	const [isFavorite, setIsFavorite] = useState(false);

	const onToggleFavorite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		localFavorites.toggleFavorite(pokemon.id);
		setIsFavorite(!isFavorite);

		if (!isFavorite) {
			confetti({
				zIndex: 1000,
				particleCount: 100,
				spread: 160,
				angle: -100,
				origin: {
					y: 0,
					x: 1,
				},
			});
		}
	};

	useEffect(() => {
		const isFavorite = localFavorites.existsInFavorites(pokemon.id);

		setIsFavorite(isFavorite);
	}, []);

	return (
		<Layouts
			meta={{
				title: pokemon.name,
				description: `This is the ${pokemon.name} page`,
			}}
		>
			<Grid.Container css={{ mt: '5px' }} gap={2}>
				<Grid xs={12} sm={4}>
					<Card isHoverable css={{ p: '30px' }}>
						<Card.Body>
							<Card.Image
								src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
								alt={pokemon.name}
								width='100%'
								height={200}
							/>
						</Card.Body>
					</Card>
				</Grid>
				<Grid xs={12} sm={8}>
					<Card>
						<Card.Header
							css={{
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							<Text h1 transform='capitalize'>
								{pokemon.name}
							</Text>
							<Button onClick={onToggleFavorite} color='gradient' ghost={!isFavorite}>
								{isFavorite ? 'Remove from favorites' : 'Add to favorites'}
							</Button>
						</Card.Header>
						<Card.Body>
							<Text size={30}>Sprites:</Text>

							<Container>
								<Grid.Container>
									<Grid>
										<Image
											src={pokemon.sprites.front_default}
											alt={pokemon.name}
											width={100}
											height={100}
										/>
									</Grid>
									<Grid>
										<Image
											src={pokemon.sprites.back_default}
											alt={pokemon.name}
											width={100}
											height={100}
										/>
									</Grid>
									<Grid>
										<Image
											src={pokemon.sprites.front_shiny}
											alt={pokemon.name}
											width={100}
											height={100}
										/>
									</Grid>
									<Grid>
										<Image
											src={pokemon.sprites.back_shiny}
											alt={pokemon.name}
											width={100}
											height={100}
										/>
									</Grid>
								</Grid.Container>
							</Container>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</Layouts>
	);
};

export const getStaticPaths: GetStaticPaths = async ctx => {
	const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

	return {
		paths: data.results.map(pokemon => ({
			params: {
				name: pokemon.name,
			},
		})),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { name } = params as { name: string };

	const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`);

	const pokemon = {
		id: data.id,
		name: data.name,
		sprites: data.sprites,
	};

	return {
		props: {
			pokemon,
		},
	};
};

export default PokemonByNamePage;
