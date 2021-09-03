import React from "react";
import { Header } from "../../components";

export default function HeaderHero() {
	return (
		<Header.Feature>
			<Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
			<Header.Text>
				Forever alone in a crowd, failed comedian Arthur Fleck seeks
				connection as he walks the street of Gotham City. Arthur wears
				two masks -- the one he paints for his dat job as a clown, and
				the guise he project in a futile attempt to feel like he's part
				of the world around him.
			</Header.Text>
			<Header.PlayButton>Play</Header.PlayButton>
		</Header.Feature>
	);
}
