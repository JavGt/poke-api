import { Layouts } from '@/components/Layouts';
import { FavoritePokemons } from '@/components/ui/FavoritePokemons';
import { NotFavorites } from '@/components/ui/NotFavorites';
import { localFavorites } from '@/utils';
import { Card, Grid } from '@nextui-org/react';
import { useEffect, useState } from 'react';

const meta = {
	title: 'Favorites',
};

const Favorites = () => {
	const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

	useEffect(() => {
		setFavoritesPokemons(localFavorites.getFavorites());
	}, []);

	return (
		<Layouts meta={meta}>
			{Boolean(favoritesPokemons.length) ? (
				<FavoritePokemons pokemons={favoritesPokemons} />
			) : (
				<NotFavorites />
			)}
		</Layouts>
	);
};

export default Favorites;
