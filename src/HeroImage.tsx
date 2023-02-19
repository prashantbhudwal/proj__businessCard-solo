import styled from "@emotion/styled";

const Image = styled.img`
  width: 100%;
`;

export default function HeroImage() {
  return (
    <>
      <Image src="/src/assets/profile.jpg"></Image>
    </>
  );
}
