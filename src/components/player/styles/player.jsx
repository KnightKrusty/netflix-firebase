import styled from "styled-components/macro";

export const Container = styled.div``;

export const Overlay = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0,0,0, 0.5)
	margin:  0 20px;
`;

export const Inner = styled.div`
	position: relative;
	width: 100%;
	max-width: 900px;
	margin: auto;

	video {
		height: 100%;
		width: 100%;
	}
`;

export const Close = styled.div`
	position: absolute;
	right: 15px;
	top: 15px;
	width: 22px;
	height: 22px;
	border: 2px solid;
	border-radius: 4px;
	cursor: pointer;
	box-sizing: border-box;
	display: block;
	transition: all 0.2s;

	&:hover {
		transform: scale(1.1);
		background: grey;
	}

	&:before,
	&:after {
		content: "";
		display: block;
		box-sizing: border-box;
		position: absolute;
		width: 12px;
		height: 2px;
		background: black;
		transform: rotate(45deg);
		border-radius: 5px;
		top: 8px;
		left: 3px;
	}

	&:after {
		transform: rotate(-45deg);
	}
`;

export const Button = styled.button`
	background-color: #e50914;
	border-color: #ff0a10;
	width: 114px;
	height: 45px;
	text-transform: uppercase;
	font-weight: bold;
	color: white;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-left: 0;

	&:hover {
		transform: scale(1.2);
		background-color: #ff0a16;
	}
`;
