import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faHashnode,
} from "@fortawesome/free-brands-svg-icons";

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  color: white;
  background: #161619;
  border-radius: 0px 0px 10px 10px;
  font-size: 1.75rem;
  padding: 0.5em 1em;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <FontAwesomeIcon icon={faGithub} />
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faHashnode} />
    </StyledFooter>
  );
}
