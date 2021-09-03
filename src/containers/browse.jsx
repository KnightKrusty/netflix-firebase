import React, { useState, useContext, useEffect } from "react";
import { SelectProfileContainer } from "./profiles";
import Fuse from "fuse.js";
import { FirebaseContext } from "../context/firebase";
import { Card, Loading, Player } from "../components";
import { BrowseHeader } from "../cleancontainers";
import { FooterContainer } from "./footer.jsx";

export function BrowseContainer({ slides }) {
	const [category, setCategory] = useState("series");
	const [searchTerm, setSearchTerm] = useState("");
	const [profile, setProfile] = useState({});
	const [loading, setLoading] = useState(true);
	const { firebase } = useContext(FirebaseContext);
	const user = firebase.auth().currentUser || {};
	const [slideRows, setSlideRows] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 4000);
	}, [profile.displayName]);

	useEffect(() => {
		setSlideRows(slides[category]);
	}, [slides, category]);

	useEffect(() => {
		const fuse = new Fuse(slideRows, {
			keys: ["data.description", "data.title", "data.genre"],
		});
		const results = fuse.search(searchTerm).map(({ item }) => item);

		if (
			slideRows.length > 0 &&
			searchTerm.length > 3 &&
			results.length > 0
		) {
			setSlideRows(results);
		} else {
			setSlideRows(slides[category]);
		}
	}, [searchTerm]);

	return profile.displayName ? (
		<>
			{loading ? (
				<Loading src={user.photoURL} />
			) : (
				<Loading.ReleaseBody />
			)}

			<BrowseHeader
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				user={user}
				category={category}
				setCategory={setCategory}
			></BrowseHeader>

			<Card.Group>
				{slideRows.map((slideItem) => (
					<Card key={`${category}-${slideItem.title.toLowerCase()}`}>
						<Card.Title>{slideItem.title}</Card.Title>
						<Card.Entities>
							{slideItem.data.map((item) => (
								<Card.Item key={item.docId} item={item}>
									<Card.Image
										src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
									/>
									<Card.Meta>
										<Card.SubTitle>
											{item.title}
										</Card.SubTitle>
										<Card.Text>
											{item.description}
										</Card.Text>
									</Card.Meta>
								</Card.Item>
							))}
						</Card.Entities>
						<Card.Feature category={category}>
							<Player>
								<Player.Button />
								<Player.Video src="/videos/bunny.mp4" />
							</Player>
						</Card.Feature>
					</Card>
				))}
			</Card.Group>

			<FooterContainer />
		</>
	) : (
		<SelectProfileContainer user={user} setProfile={setProfile} />
	);
}
