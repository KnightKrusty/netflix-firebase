import React from "react";
import { Header } from "../../components";
import BrowseNav from "./browsenav";
import HeaderHero from "./headerhero";

export default function BrowseHeader({
	searchTerm,
	setSearchTerm,
	user,
	category,
	setCategory,
}) {
	return (
		<Header src="joker1" dontShowOnSmallViewPort>
			<BrowseNav
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				user={user}
				category={category}
				setCategory={setCategory}
			/>
			<HeaderHero />
		</Header>
	);
}
