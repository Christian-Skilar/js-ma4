import Head from "../components/head";
import Heading from "../components/Heading"
import Layout from "../components/layout/Layout";
import axios from "axios";
import { API } from "../constants/api";
import Image from 'next/image'

export default function Results(props) {
	console.log(props);
	return (
		<Layout>
			<Head title="Results" />
            <Heading heading="My Result page" />

			<div className="cards">
			{props.character.map((person) => {
				return <div key={person.id}> 
				<h3>{person.name}</h3>
				<Image src={person.image} width="300" height="300" alt="Character image" className="images"></Image>
				</div>
			})}

			</div>
		</Layout>
	);
}

export async function getStaticProps() {

	let character = [];

	try {
		const response = await axios.get(API);

		character = response.data.results;

	} catch (error) {
		console.log(error);
	}

	return {
		props: {
			character: character,
		},
	};
}




