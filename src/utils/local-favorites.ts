export const toggleFavorite = (id: number) => {
	let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

	const isExist = favorites.includes(id);

	favorites = isExist
		? favorites.filter(favoriteId => favoriteId !== id)
		: [...favorites, id];

	localStorage.setItem('favorites', JSON.stringify(favorites));
};

const existsInFavorites = (id: number): boolean => {
	if (typeof window === 'undefined') return false;

	const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

	return favorites.includes(id);
};

const getFavorites = (): number[] => {
	return JSON.parse(localStorage.getItem('favorites') || '[]');
};

export default {
	toggleFavorite,
	existsInFavorites,
	getFavorites,
};
