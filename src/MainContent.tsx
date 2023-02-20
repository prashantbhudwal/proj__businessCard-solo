import styled from "@emotion/styled";
const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  padding-left: 2em;
  padding-bottom: 2em;

  & h1 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.25em;
  }
  & p {
    display: block;
    font-size: 1.2rem;
    color: #dcdcdc;
    line-height: 1.5;
    padding-right: 3em;
    line-break: auto;
  }
`;
export default function MainContent({ profile }: any) {
  const { about, interests } = profile;
  return (
    <StyledMainContent>
      <div>
        <h1>About</h1>
        <p>{about}</p>
      </div>
      <div>
        <h1>Interest</h1>
        <p>{interests}</p>
      </div>
    </StyledMainContent>
  );
}
