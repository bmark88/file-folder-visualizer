import styled from "styled-components";

export const MainContent = styled.main`
  max-width: 1440px;
  margin: 0 auto;
`;

export const TitleH1 = styled.h1`
  font-size: 2.4rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 3.2rem;
  }
`;
