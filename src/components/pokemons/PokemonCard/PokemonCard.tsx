import { SmallPokemon } from '@/interfaces';
import { Card, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

const PokemonCard = ({ pokemon }: { pokemon: SmallPokemon }) => {
	const { image, name, _id } = pokemon;

	const router = useRouter();

	const onClick = () => {
		router.push(`/name/${name}`);
	};

	return (
		<Card
			css={{
				bs: 'none',
			}}
			onClick={onClick}
			isHoverable
			isPressable
		>
			<Card.Body css={{ p: 1 }}>
				<Card.Image src={image} width='100' height={140} />
			</Card.Body>

			<Card.Footer>
				<Row justify='space-between'>
					<Text weight='semibold' transform='capitalize'>
						{name}
					</Text>

					<Text>#{_id}</Text>
				</Row>
			</Card.Footer>
		</Card>
	);
};

export default PokemonCard;
