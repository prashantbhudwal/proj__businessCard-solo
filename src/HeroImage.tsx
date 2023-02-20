import styled from "@emotion/styled";

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0px 0px;
`;

export default function HeroImage({ src }: any) {
  return (
    <>
      <Image src={src}></Image>
    </>
  );
}
