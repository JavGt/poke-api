import Head from 'next/head';
import NavBar from '../ui/NavBar/NavBar';

export type LayoutsProps = {
	children: React.ReactNode;
	meta?: {
		title?: string;
		description?: string;
		author?: string;
		keywords?: string[];
	};
};

const Layouts: React.FC<LayoutsProps> = ({ children, meta }) => {
	return (
		<>
			<Head>
				<title key='title'>{meta?.title} | Pokemon Api</title>
				<meta name='description' content={meta?.description} />
				<meta name='author' content={meta?.author ?? 'John Doe'} />
				<meta name='keywords' content={meta?.keywords?.join(', ')} />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta charSet='utf-8' />
				<meta name='og:title' content={meta?.title} />
				<meta name='og:description' content={meta?.description} />
				<meta name='og:image' content='/image.webp' />
				<meta name='og:url' content='https://pokemon-api-psi.vercel.app/' />
			</Head>

			{/* Navbar */}
			<NavBar />

			<main style={{ padding: '0px 20px' }}>{children}</main>
		</>
	);
};

export default Layouts;
