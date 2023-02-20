import styled from "@emotion/styled";

const getButtonColor = function (primary: any) {
  return "brown";
};
// Not adding this gives an error
interface ButtonProps {
  backgroundColor: string;
  color: string;
}

const StyledIconButton = styled.button<ButtonProps>`
  color: ${(props: any) => props.color};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  min-width: 100px;
  padding: 0.7em 1.5em;
  font-size: 1em;
  background-color: ${(props: any) => props.backgroundColor};
  display: flex;
  gap: 0.3em;
  align-items: baseline;
`;

const IconButton = ({ backgroundColor, color, icon, children }: any) => {
  return (
    <StyledIconButton backgroundColor={backgroundColor} color={color}>
      <div>{icon}</div>
      <div>{children}</div>
    </StyledIconButton>
  );
};

export default IconButton;
