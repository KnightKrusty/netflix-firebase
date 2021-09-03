import React, { useContext } from "react";
import { FirebaseContext } from "../../context/firebase";
import { Header } from "../../components";
import * as ROUTES from "../../constants/routes";
import logo from "../../netflix_logo.svg";

export default function BrowseNav({
	searchTerm,
	setSearchTerm,
	user,
	category,
	setCategory,
}) {
	const { firebase } = useContext(FirebaseContext);

	return (
		<Header.Frame>
			<Header.Group>
				<Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
				<Header.TextLink
					active={category === "series" ? "true" : "false"}
					onClick={() => setCategory("series")}
				>
					Series
				</Header.TextLink>
				<Header.TextLink
					active={category === "films" ? "true" : "false"}
					onClick={() => setCategory("films")}
				>
					Films
				</Header.TextLink>
			</Header.Group>
			<Header.Group>
				<Header.Search
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
				/>
				<Header.Profile>
					<Header.Picture src={user.photoURL} />
					<Header.Dropdown>
						<Header.Group>
							<Header.Picture src={user.photoURL} />
							<Header.TextLink>
								{user.displayName}
							</Header.TextLink>
						</Header.Group>
						<Header.Group>
							<Header.TextLink
								onClick={() => firebase.auth.signOut()}
							>
								Sign out
							</Header.TextLink>
						</Header.Group>
					</Header.Dropdown>
				</Header.Profile>
			</Header.Group>
		</Header.Frame>
	);
}
