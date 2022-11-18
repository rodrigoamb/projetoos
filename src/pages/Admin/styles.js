import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: flex-end;

	.container-screen {
		width: calc(100% - 345px);
		min-height: 100vh;
	}

	@media (max-width: 1000px) {
		flex-direction: column;
		.container-screen {
			width: 100%;
		}
	}
`;

