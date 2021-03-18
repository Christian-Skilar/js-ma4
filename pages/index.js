import Head from "../components/head";
import Heading from "../components/Heading"
import Layout from "../components/layout/Layout";
import Link from "next/link";

export default function Index() {
	
	return (
		<Layout>
			<Head title="Home" />
			<Heading heading="My Home page" />

			<Link href="/results">Results</Link>

		</Layout>
	);
}
