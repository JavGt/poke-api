import { Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

export interface NavBarInterface {}

const NavBar: React.FC<NavBarInterface> = () => {
	const { theme } = useTheme();

	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'start',
				padding: '0px 20px',
				backgroundColor: theme?.colors?.gray100.value,
			}}
		>
			<Link href='/' style={{ display: 'inline-flex' }}>
				<Image
					src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
					alt='Pokemon'
					width={70}
					height={70}
				></Image>

				<Text color='white' h2>
					P
				</Text>
				<Text color='white' h3>
					okemon
				</Text>
			</Link>

			<Spacer
				css={{
					flexGrow: 1,
				}}
			/>
			<Link href='/favorites'>
				<Text>Favorites</Text>
			</Link>
		</div>
	);
};

export default NavBar;
