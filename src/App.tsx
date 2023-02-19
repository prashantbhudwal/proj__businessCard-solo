import HeroImage from "./HeroImage";
import styled from "@emotion/styled";
import { Global } from "@emotion/react";
import globalStyles from "./globalStyle";
import Footer from "./assets/Footer";
import MainSection from "./MainContainer";

const AppContainer = styled.div`
  background-color: whitesmoke; //TODO: Remove later
  max-width: 320px;
`;

export default function App() {
  return (
    <AppContainer>
      <Global styles={globalStyles} />
      <HeroImage />
      <MainSection />
      <Footer />
    </AppContainer>
  );
}
