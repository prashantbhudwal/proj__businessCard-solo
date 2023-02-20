import HeroImage from "./HeroImage";
import styled from "@emotion/styled";
import { Global } from "@emotion/react";
import globalStyles from "./globalStyle";
import Footer from "./Footer";
import MainSection from "./MainSection";

const AppContainer = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  color: white;
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
