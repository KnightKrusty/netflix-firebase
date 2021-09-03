import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";

export default function Signin() {
	const history = useHistory();
	const { firebase } = useContext(FirebaseContext);
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	// Check from input elements are valid
	// email and password

	const isInvalid = password === "" || emailAddress === "";

	const handleSignin = (event) => {
		event.preventDefault();

		firebase
			.auth()
			.signInWithEmailAndPassword(emailAddress, password)
			.then(() => {
				// push to browser page
				history.push(ROUTES.BROWSE);
			})
			.catch((error) => {
				setEmailAddress("");
				setPassword("");
				setError(error.message);
			});

		// FIREBASE work here
	};

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign In</Form.Title>
					{error && (
						<Form.Error data-testid="error">{error}</Form.Error>
					)}

					<Form.Base onSubmit={handleSignin} method="POST">
						<Form.Input
							placeholder="Email address"
							value={emailAddress}
							onChange={({ target }) =>
								setEmailAddress(target.value)
							}
						/>
						<Form.Input
							type="password"
							value={password}
							autoComplete="off"
							placeholder="Password"
							onChange={({ target }) => setPassword(target.value)}
						/>
						<Form.Submit
							disabled={isInvalid}
							type="submit"
							data-testid="sign-in"
						>
							Sign In
						</Form.Submit>
					</Form.Base>

					<Form.Text>
						New to Netflix?{" "}
						<Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
					</Form.Text>
					<Form.TextSmall>
						This page is protected by Google reCAPTCHA to ensure
						you're not a bot. Learn More.
					</Form.TextSmall>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
}
