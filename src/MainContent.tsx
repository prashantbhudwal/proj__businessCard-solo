import styled from "@emotion/styled";
const StyledMainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  padding: 1em 1.25em;

  & h1 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.25em;
  }
  & p {
    font-size: 1rem;
    color: #dcdcdc;
    line-height: 1.5;
  }
`;
export default function MainContent() {
  return (
    <StyledMainContent>
      <div>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          ipsam molestias dolorum soluta voluptas explicabo pariatur cupiditate
          obcaecati dolores. Expedita facere quo corrupti cumque asperiores nemo
          impedit dignissimos quibusdam ratione.
        </p>
      </div>
      <div>
        <h1>Interest</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          ipsam molestias dolorum soluta voluptas explicabo pariatur cupiditate
          obcaecati dolores. Expedita facere quo corrupti cumque asperiores nemo
          impedit dignissimos quibusdam ratione.
        </p>
      </div>
    </StyledMainContent>
  );
}
