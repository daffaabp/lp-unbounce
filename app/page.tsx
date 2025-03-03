import Convert from "./landingpage/_components/convert";
import Everything from "./landingpage/_components/everything";
import Footer from "./landingpage/_components/footer";
import Hero from "./landingpage/_components/hero";
import Launch from "./landingpage/_components/launch";
import LetAI from "./landingpage/_components/letai";
import Marketers from "./landingpage/_components/marketers";
import Navbar from "./landingpage/_components/navbar";
import Scale from "./landingpage/_components/scale";
import Seamlessly from "./landingpage/_components/seamlessly";
import WithYou from "./landingpage/_components/withyou";

export default function Home() {
	return (
		<main className="min-h-screen font-[family-name:var(--font-geist-sans)]">
			<Navbar />
			<Hero />
			<Convert />
			<Launch />
			<Everything />
			<LetAI />
			<Seamlessly />
			<Marketers />
			<Scale />
			<WithYou />
			<Footer />
		</main>
	);
}
