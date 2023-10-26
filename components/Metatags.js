import Head from 'next/head';

export default function Metatags({
	title = "Inovação que Move o Mercado",
	description = "Acesse as Inovações do Amanhã, Hoje. Só na Beyond Curve",
	image = "https://github.com/Vguedess/ai-saas/blob/master/public/beyond%20curve%20logo%20v2.png?raw=true",
}) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content="@fireship_dev" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
		</Head>
	);
}
