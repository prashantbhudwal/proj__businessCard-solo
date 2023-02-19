import styled from "@emotion/styled";
import Button from "./Button";

const StyledHeroContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
  padding: 2em;
`;

const FullName = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  color: white;
`;

const Profession = styled.h2`
  font-size: 1rem;
  color: #f3bf99;
`;

const Website = styled.p`
  color: #f5f5f5;
  font-size: 0.8rem;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

export default function HeroContent() {
  return (
    <StyledHeroContent>
      <FullName>Prashant Bhudwal</FullName>
      <Profession>Frontend Developer</Profession>
      <Website>ideabox.substack.com</Website>
      <ButtonContainer>
        <Button gray>Linkedin</Button>
        <Button primary>Linkedin</Button>
      </ButtonContainer>
    </StyledHeroContent>
  );
}
