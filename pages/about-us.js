import Head from "../components/head";
import Heading from "../components/Heading"
import Layout from "../components/layout/Layout";

export default function About() {
	return (
		<Layout>
			<Head title="About" />
			<Heading heading="My About page" />

			<p className="lorem">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
			sed do eiusmod tempor incididunt ut labore et dolore magna 
			aliqua. Lacus laoreet non curabitur gravida arcu ac. Arcu 
			bibendum at varius vel pharetra vel. Faucibus ornare suspendisse 
			sed nisi. In egestas erat imperdiet sed euismod nisi porta lorem 
			mollis. Aenean sed adipiscing diam donec adipiscing tristique 
			risus nec. Nec nam aliquam sem et tortor consequat id porta. 
			Pellentesque sit amet porttitor eget dolor morbi non. 
			Et pharetra pharetra massa massa ultricies mi. Cursus 
			vitae congue mauris rhoncus.
			</p>
		</Layout>
	);
}
