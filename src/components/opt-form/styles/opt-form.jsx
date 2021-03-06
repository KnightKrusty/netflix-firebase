import styled from "styled-components/macro";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
	flex-wrap: wrap;
	align-items: center;

	@media (max-width: 1000px) {
		flex-direction: column;
		align-items: center;k
	}
`;

export const Input = styled.input`
	max-width: 450px;
	width: 100%;
	border: 0;
	padding: 10px;
	height: 70px;
	box-sizing: border-box;
	transition: all 0.8s;

	&:focus {
		outline: none;
		border: 1px solid red;
	}
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	height: 70px;
	background: #e50914;
	text-transform: uppercase;
	font-size: 26px;
	color: white;
	padding: 0 32px;
	border: 0;
	cursor: pointer;

	&:hover {
		background: #f40612;
	}

	@media (max-width: 1000px) {
		height: 50px;
		font-size: 16px;
		margin-top: 20px;
		font-weight: bold;
	}

	img {
		margin-left: 10px;
		filter: brightness(0) invert(1);
		width: 24px;

		@media (max-width: 1000px) {
			width: 16px;
		}
	}
`;

export const Text = styled.p`
	font-size: 19.2px;
	color: #fff;
	text-align: center;

	@media (max-width: 600px) {
		font-size: 16px;
		line-height: 22px;
	}
`;

export const Break = styled.div`
	flex-basis: 100%;
	height: 0;
`;
