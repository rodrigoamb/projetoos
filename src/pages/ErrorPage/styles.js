import styled from "styled-components";

export const Container = styled.div`
	min-width: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;

	.limit-content {
		text-align: center;
	}

	.img {
		margin-bottom: 30px;
	}

	.error-msg {
		font-size: 3rem;
		font-weight: bold;
	}

	.msg {
		font-size: 1.5rem;
		text-transform: uppercase;
	}
`;

