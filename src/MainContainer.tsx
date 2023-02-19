import styled from "@emotion/styled";
import DetailedContent from "./DetailedContent";
import HeroContent from "./HeroContent";

const MainContainer = styled.div`
  background: #1a1b21;
`;

export default function MainSection() {
  return (
    <MainContainer>
      <HeroContent />
      <DetailedContent />
    </MainContainer>
  );
}
