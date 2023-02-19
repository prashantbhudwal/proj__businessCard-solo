import HeroImage from "./HeroImage";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
import globalStyles from "./globalStyle";

const AppContainer = styled.div`
  background-color: whitesmoke;
`;

export default function App() {
  return (
    <AppContainer>
      <Global styles={globalStyles} />
      <HeroImage />
    </AppContainer>
  );
}
