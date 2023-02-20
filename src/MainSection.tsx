import styled from "@emotion/styled";
import MainContent from "./MainContent";
import HeroContent from "./HeroContent";

const StyledMainSection = styled.div`
  background: #1a1b21;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export default function MainSection() {
  return (
    <StyledMainSection>
      <HeroContent />
      <MainContent />
    </StyledMainSection>
  );
}
