import styled from "@emotion/styled";
import Button from "./Button";

const StyledHeroContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
  padding: 2em;

  & h1 {
    font-weight: 700;
    font-size: 1.5rem;
    color: white;
  }

  & h2 {
    font-size: 1rem;
    color: #f3bf99;
  }

  & p {
    color: #f5f5f5;
    font-size: 0.8rem;
  }

  .buttonCOntainer {
    display: flex;
  }
`;

export default function HeroContent() {
  return (
    <StyledHeroContent>
      <h1>Prashant Bhudwal</h1>
      <h2>Frontend Developer</h2>
      <p>ideabox.substack.com</p>
      <div className="buttonContainer">
        <Button outlined>Email</Button>
        <Button primary>LinkedIn</Button>
      </div>
    </StyledHeroContent>
  );
}
