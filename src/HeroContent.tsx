import styled from "@emotion/styled";
import IconButton from "./IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const StyledHeroContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
  padding: 1.5em;

  & h1 {
    font-weight: 700;
    font-size: 1.5rem;
    color: white;
  }

  & h2 {
    font-size: 1rem;
    color: #f3bf99;
  }

  & a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 0.8rem;
  }

  .buttonContainer {
    margin-top: 0.75em;
    display: flex;
    gap: 1em;
  }
`;

export default function HeroContent({ profile }: any) {
  const { name, profession, portfolio, url } = profile;
  const { linkedin, email } = url;
  const { portfolioName, portfolioUrl } = portfolio;
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />;
  const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
  const primary = `#5093E2`;
  const gray = `#D1D5DB`;
  const white = `#fff`;
  const black = `#000`;
  return (
    <StyledHeroContent>
      <h1>{name}</h1>
      <h2>{profession}</h2>
      <a href={portfolioUrl}>{portfolioName}</a>
      <div className="buttonContainer">
        <IconButton
          href={email}
          color={black}
          backgroundColor={gray}
          icon={emailIcon}
        >
          Email
        </IconButton>
        <IconButton
          href={linkedin}
          color={white}
          backgroundColor={primary}
          icon={linkedinIcon}
        >
          LinkedIn
        </IconButton>
      </div>
    </StyledHeroContent>
  );
}
